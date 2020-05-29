var today=new Date();
var i=today.getSeconds();
i = i * 36


function startTime() {
    //get time
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();



    //text for hour
    hh = String(checkTime(h)).toString()
    $('#hour-left').text(hh[0]);
    $('#hour-right').text(hh[1]);

    //text for minute
    mm = String(checkTime(m)).toString()
    $('#min-left').text(mm[0]);
    $('#min-right').text(mm[1]);


    // add zero in front of numbers < 10
    function checkTime(i) {
        if (i<10) {i = "0" + i};  
        return i;
    }

 
    console.log(h, ":" , m, ":", s)
    

        $("ul").animate({marginBottom: '+='+i }, function() {

            i = 36;

            if(s === 0 ){
                $("ul").animate({marginBottom: '+=-2160' })
            
            }

        });

        // if(s==60){
        //     console.log("its 60")
        //     $("ul").animate({marginBottom: '+='+i })
        
        // }

        

    
    //repeat every second
    var t = setTimeout(function(){startTime()}, 1000);
}

startTime();












