const reactorControl = {
    currentValue: 451500,
    step: 30,
    maxVal: 480000,
    minVal: 430000,
    warningThreshold: 478900,
    digitCount: 6,
    elements: [],
    
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
  
      const wrapper = document.createElement('div');
      wrapper.className = 'reactor-container';
      wrapper.innerHTML = `
        <div class="reactor-label">System Status</div>
        <div class="reactor-display" id="${containerId}-display"></div>
      `;
  
      container.appendChild(wrapper);
      const display = document.getElementById(`${containerId}-display`);
  
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
  
      setInterval(() => this.update(wrapper), 1000);
    },
  
    update(container) {
      this.currentValue += this.step + (Math.random() * 4 - 2);
  
      if (this.currentValue >= this.maxVal || this.currentValue <= this.minVal) {
        this.step *= -1;
      }
  
      if (this.currentValue > this.warningThreshold) {
        container.classList.add('warning-active');
      } else {
        container.classList.remove('warning-active');
      }
  
      const strVal = Math.floor(this.currentValue).toString().padStart(this.digitCount, '0');
      
      this.elements.forEach((digit, idx) => {
        const char = strVal[idx];
        const active = this.numberMap[char] || [];
        Object.keys(digit).forEach(s => {
          digit[s].classList.toggle('segment-on', active.includes(s));
        });
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    reactorControl.init('result');
  });
