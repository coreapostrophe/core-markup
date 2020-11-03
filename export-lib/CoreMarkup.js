function on_button_click(){
    console.log("apple kiddy".length)
}

class CoreMarkup{
    constructor(lines){
        this.lines = lines
        this.currentHeaders = new Headers()
        this.questions = this.transcribe(this.lines);
    }

    transcribe(lines){
        masterList = []
        for(var i=0;i<lines.length;i++){
            if(lines[i][0]=="#"){
                count = -1
                for(var j in lines[i]){
                    if(lines[i][j]=="#"){
                        count += 1
                    } else break
                }
                for(var k=count; k<this.currentHeaders.length; k++){
                    this.currentHeaders.pop()
                }
                this.currentHeaders.add(lines[i].slice(count+2,lines[i].length))
            } else if (["$","*"].indexOf(lines[i][0])!==-1){
                question = new Question(lines[i].split(1,lines[i].length))
                question.setHeaders(this.currentHeaders)
                details = []
                if(lines[i][0]=="$"){
                    question.setEnumerability(true)
                }
                for(var j=i+1;j<lines.length;j++){
                    if(lines[j][0]=="-"){
                        details.push(lines[j].slice(1,lines[j].length))
                    } else break
                }
                question.setDetails(this.transcribe(details))
                masterList.push(question)
            } else if (["","\n","-"].indexOf(lines[i][0])!==-1){
                masterList.append(lines[i])
            }
        }
        return masterList
    }

    getQuestions(){
        return this.questions
    }
}

class Question{
    constructor(mainConcept){
        this.enumerable = false
        this.mainConcept = mainConcept
        this.details = []
    }

    isEnumerable(){
        return this.enumerable
    }

    setEnumerability(bool){
        this.enumerable = bool
    }

    addDetail(detail){
        this.details.push(detail)
    }

    setDetails(details){
        this.details = details
    }

    getMainConcept(){
        return this.getMainConcept
    }

    getDetails(){
        return this.details
    }

    setHeaders(headers){
        this.headers = headers
    }
}

class Headers{
    constructor(...args){
        this.list = []
        for(var i in args){
            this.list.push(args[i])
        }
    }

    add(header){
        this.list.push(header);
    }

    pop(){
        this.list.pop()
    }

    length(){
        return this.list.length
    }

    get(){
        return this.list
    }
}