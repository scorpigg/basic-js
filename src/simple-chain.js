const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return chainMaker;
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() || typeof(position) == 'string'){
      this.chain = [];
      throw Error();
    }else{
      this.chain.splice(position - 1, 1);
      return chainMaker;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain(){
    let str = '';
    str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
