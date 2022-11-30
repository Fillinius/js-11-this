const student = {
  stack: ['HTML'],
  level: 1,
  // improveLevel() {
  //     let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
  //     if (this.level < 5) {
  //         this.stack.push(fullStack[this.level++]);
  //     }
  //     return this;
  // }
  improveLevel(){
   this.level++
  //  this.stack.push[this.level]
    if(this.level===1){
      return this.stack.push('HTML')
    }
    if(this.level===2) {
      return this.stack.push('CSS')
    }
    if(this.level===3) {
      return this.stack.push('JavaScript')
  } if(this.level===4) {
    return this.stack.push('React')
  }if(this.level<=5) {
      return this.stack.push('NodeJS')
  } return this

} 
}

student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
 
console.log(student);



