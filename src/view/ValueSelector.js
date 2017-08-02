export default class ValueSelector {
  constructor(wrapId){
    this.wrapContainer = document.getElementById(wrapId);
    this.degreaseButton = this.wrapContainer.getElementsByClassName("degreaseButton")[0];
    this.increaseButton = this.wrapContainer.getElementsByClassName("increaseButton")[0];
    this.value = this.wrapContainer.getElementsByClassName("computedVal")[0];
  }
  refreshValue(value){
   this.value.innerHTML = value;
  }
  
};   