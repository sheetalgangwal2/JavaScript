const stopwatch = {
    second:0,
    start: function(){
        
        setInterval(()=>{
            this.second++;
            console.log(this.second)
            },1000)

        
    }
};

stopwatch.start();