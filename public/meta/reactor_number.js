// This code was written entirely by AI @Spaguette takes no responsibility over its function.
// I just can't understand it.





const reactorControl = {
    currentValue: 0,
    warningThreshold: 47890,
    digitCount: 7,
    elements: [],
    wrapper: null, // Store the reference here
    
    numberMap: {
      '0': ['a', 'b', 'c', 'd', 'e', 'f'],
      '1': ['b', 'c'],
      '2': ['a', 'b', 'g', 'e', 'd'],
      '3': ['a', 'b', 'g', 'c', 'd'],
      '4': ['f', 'g', 'b', 'c'],
      '5': ['a', 'f', 'g', 'c', 'd'],
      '6': ['a', 'f', 'g', 'e', 'c', 'd'],
      '7': ['a', 'b', 'c'],
      '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      '9': ['a', 'b', 'c', 'd', 'f', 'g']
    },
  
    init(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
  
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'reactor-container';
      this.wrapper.innerHTML = `
        <div class="reactor-label">Temperature</div>
        <div class="reactor-display" id="${containerId}-display"></div>
      `;
  
      container.appendChild(this.wrapper);
      const display = document.getElementById(`${containerId}-display`);
  
      this.elements = [];
      for (let i = 0; i < this.digitCount; i++) {
        const digitDiv = document.createElement('div');
        digitDiv.className = 'reactor-digit';
        const segmentMap = {};
        
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(s => {
          const seg = document.createElement('div');
          seg.className = `reactor-segment ${s}`;
          digitDiv.appendChild(seg);
          segmentMap[s] = seg;
        });
        
        display.appendChild(digitDiv);
        this.elements.push(segmentMap);
      }
  
      // Start the tracking loop
      this.tick();
    },

    tick() {
      this.update();
      // Using requestAnimationFrame for high-frequency background sync
      requestAnimationFrame(() => this.tick());
    },
  
    update() {
      // 1. Pull the live value from your background variable
      if (typeof temperature !== 'undefined') {
        this.currentValue = temperature;
      }

      // 2. Safety check: Ensure the wrapper exists before modifying classes
      if (!this.wrapper) return;
  
      if (this.currentValue > this.warningThreshold) {
        this.wrapper.classList.add('warning-active');
      } else {
        this.wrapper.classList.remove('warning-active');
      }
  
      // 3. Update the segments
      const strVal = Math.floor(this.currentValue).toString().padStart(this.digitCount, '0').slice(-this.digitCount);
      
      this.elements.forEach((digit, idx) => {
        const char = strVal[idx];
        const active = this.numberMap[char] || [];
        Object.keys(digit).forEach(s => {
          digit[s].classList.toggle('segment-on', active.includes(s));
        });
      });
    }
};