export const html = /*html*/
`
<div class="calculator">
  <div class="screen">
    <div id="screen-display">0</div>
    <div><br></div>
    <div class="menu-line">
      <div>MC</div>
      <div>MR</div>
      <div>M+</div>
      <div>M-</div>
      <div class="last"><div class="m">M</div><span class="arrow-head">&#x2304;</span></div>
    </div>
  </div>
  <div class="keyboard">
    <div class="btn number-or-operator operator" data-calcdata="%">&percnt;</div>
    <div class="btn erase-all-btn">CE</div>
    <div class="btn erase-btn">C</div>
    <div class="btn far-left erase-btn">&#60;&#60;</div>
    <div class="btn"></div>
    <div class="btn number-or-operator operator" data-calcdata="** 2">x<sup>2</sup></div>
    <div class="btn number-or-operator operator" data-calcdata="√">&radic;</div>
    <div class="btn number-or-operator operator far-left" data-calcdata="/">&#247;</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="7">7</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="8">8</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="9">9</div>
    <div class="btn number-or-operator operator far-left" data-calcdata="*">&#215;</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="4">4</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="5">5</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="6">6</div>
    <div class="btn number-or-operator operator far-left" data-calcdata="-">-</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="1">1</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="2">2</div>
    <div class="btn inner-btn number-or-operator" data-calcdata="3">3</div>
    <div class="btn number-or-operator operator far-left" data-calcdata="+">+</div>
    <div class="btn inner-btn"></div>
    <div class="btn inner-btn number-or-operator" data-calcdata="0">0</div>
    <div class="btn inner-btn number-or-operator" data-calcdata=".">.</div>
    <div class="btn far-left equal-btn">=</div>
  </div>
</div>
`