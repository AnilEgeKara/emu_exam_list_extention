document.body.style.width = '800px';
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");




$('#enter').on('click',async function(e) {
    await addItem();
});
$('#getExamListBtn').on('click', function(e) {
    getExamList();
});
$("#userinput").keyup(async function(event) {
    if (event.keyCode === 13) {
        await addItem();
    }
});

$('#class-list').on('click', '#close_btn', function(e) {
    $(this).closest('li').remove()
});
$('#class-list').on('click', '#copy_btn', function(e) {
    var list = $(this).closest('li').text().replace(/(\r\n|\n|\r|  )/gm, "").replaceAll("❏ ", "").replaceAll("✕", "\n");
    navigator.clipboard.writeText(list);

    $(this).animate({'opacity': 0}, 400, async function(){
        $(this).html('Copied!!').animate({'opacity': 1}, 400);  
        await new Promise(resolve => setTimeout(resolve, 600));       
        $(this).animate({'opacity': 0}, 400, function(){
            // $(this).html('Copied!!').animate({'opacity': 1}, 400);  
            $(this).html('&#10063').animate({'opacity': 1}, 400);    
        });
    });

});
$('#copyAll').on('click', function(e) {
    var list ='';
    $('#class-list').each(function(){
        var li = $(this).find('li');
        list += li.text().replace(/(\r\n|\n|\r|  )/gm, "").replaceAll("❏ ", "").replaceAll("✕", "\n");
    })

    list += '\n\nCopied by Emu Exam List Extension : shorturl.at/bdikP'
    navigator.clipboard.writeText(list);

    $('#copyAll').animate({'opacity': 0}, 400, async function(){
        $(this).html('Copied!!').animate({'opacity': 1}, 400);  
        await new Promise(resolve => setTimeout(resolve, 600));       
        $('#copyAll').animate({'opacity': 0}, 400, function(){
            // $(this).html('Copied!!').animate({'opacity': 1}, 400);  
            $(this).html('Copy').animate({'opacity': 1}, 400);    
        });
    });

});
$('#clearAllBtn').on('click', function(e) {
    $('#class-list').empty()
    $("#empty_text").fadeIn('slow');
});

// comment random heading 
//// var splashText = ["As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it's finished!","Absolutely dragon free!","Excitement!","More than 500 sold!","One of a kind!","Heaps of hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It's a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That's not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee's knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You've got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 ez!","Music by C418!","Livestreamed!","Haunted!","Polynomial!","Terrestrial!","All is full of love!","Full of stars!","Scientific!","Cooler than Spock!","Collaborate and listen!","Never dig down!","Take frequent breaks!","Not linear!","Han shot first!","Nice to meet you!","Buckets of lava!","Ride the pig!","Larger than Earth!","sqrt(-1) love you!","Phobos anomaly!","Punching wood!","Falling off cliffs!","0% sugar!","150% hyperbole!","Synecdoche!","Let's danec!","Seecret Friday update!","Reference implementation!","Lewd with two dudes with food!","Kiss the sky!","20 GOTO 10!","Verlet intregration!","Peter Griffin!","Do not distribute!","Cogito ergo sum!","4815162342 lines of code!","A skeleton popped out!","The Work of Notch!","The sum of its parts!","BTAF used to be good!","I miss ADOM!","umop-apisdn!","OICU812!","Bring me Ray Cokes!","Finger-licking!","Thematic!","Pneumatic!","Sublime!","Octagonal!","Une baguette!","Gargamel plays it!","Rita is the new top dog!","SWM forever!","Representing Edsbyn!","Matt Damon!","Superfragilisticexpialidocious!","Consummate V's!","Cow Tools!","Double buffered!","Fan fiction!","Flaxkikare!","Jason! Jason! Jason!","Hotter than the sun!","Internet enabled!","Autonomous!","Engage!","Fantasy!","DRR! DRR! DRR!","Kick it root down!","Regional resources!","Woo, facepunch!","Woo, somethingawful!","Woo, /v/!","Woo, tigsource!","Woo, minecraftforum!","Woo, worldofminecraft!","Woo, reddit!","Woo, 2pp!","Google anlyticsed!","Now supports åäö!","Give us Gordon!","Tip your waiter!","Very fun!","12345 is a bad password!","Vote for net neutrality!","Lives in a pineapple under the sea!","MAP11 has two names!","Omnipotent!","Gasp!","...!","Bees, bees, bees, bees!","Jag känner en bot!","This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!","Haha, LOL!","Hampsterdance!","Switches and ores!","Menger sponge!","idspispopd!","Eple (original edit)!","So fresh, so clean!","Slow acting portals!","Try the Nether!","Don't look directly at the bugs!","Oh, ok, Pigmen!","Finally with ladders!","Scary!","Play Minecraft, Watch Topgear, Get Pig!","Twittered about!","Jump up, jump up, and get down!","Joel is neat!","A riddle, wrapped in a mystery!","Huge tracts of land!","Welcome to your Doom!","Stay a while, stay forever!","Stay a while and listen!","Treatment for your rash!","'Noun' is an autonym!","Information wants to be free!","'Almost never' is an interesting concept!","Lots of truthiness!","The creeper is a spy!","Turing complete!","It's groundbreaking!","Let our battle's begin!","The sky is the limit!","Jeb has amazing hair!","Casual gaming!","Undefeated!","Kinda like Lemmings!","Follow the train, CJ!","Leveraging synergy!","This message will never appear on the splash screen, isn't that weird?","DungeonQuest is unfair!","110813!","90210!","Check out the far lands!","Tyrian would love it!","Also try VVVVVV!","Also try Super Meat Boy!","Also try Terraria!","Also try Mount And Blade!","Also try Project Zomboid!","Also try World of Goo!","Also try Limbo!","Also try Pixeljunk Shooter!","Also try Braid!","That's super!","Bread is pain!","Read more books!","Khaaaaaaaaan!","Less addictive than TV Tropes!","More addictive than lemonade!","Bigger than a bread box!","Millions of peaches!","Fnord!","This is my true form!","Totally forgot about Dre!","Don't bother with the clones!","Pumpkinhead!","Hobo humping slobo babe!"]
// $('#head').text(splashText[Math.floor(Math.random()*splashText.length)]);
$('#head').text('EMU Exam List');
async function addItem(){

    fetch('https://stdportal.emu.edu.tr/examlist.asp')
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(template,"text/html");

        if(!template.includes("Not Ready")){
            var daysBody = parsedDocument.querySelectorAll('tbody')[0]["children"][0]["children"];
            var p1Body = parsedDocument.querySelectorAll('tbody')[1]["children"][0]["children"];
            var examlist = new Array;
            //console.log("for 1");
            var tempArray = new Array;
            for(var i=0; i <daysBody.length; i++){
                tempArray[i] = parsedDocument.querySelectorAll('tbody')[0]["children"][0]["children"][i]["innerText"];
            }
            examlist[0] = tempArray;
            for(var b=1; b<parsedDocument.querySelectorAll('tbody')["length"];b++){
                for(var i=0; i <parsedDocument.querySelectorAll('tbody')[b]["children"]["length"]; i++){
                    tempArray = [];
                    for(var j=0;j<parsedDocument.querySelectorAll('tbody')[b]["children"][i]["children"]["length"];j++){
                        tempArray[j] = parsedDocument.querySelectorAll('tbody')[b]["children"][i]["children"][j]["innerText"];
                    }    
                    examlist[1+i] = tempArray;
                }
                console.log(parsedDocument.querySelectorAll('b'))
                for(var i=0; i <parsedDocument.querySelectorAll('tbody')[b]["children"]["length"]; i++){
                    for(var j=0;j<parsedDocument.querySelectorAll('tbody')[b]["children"][i]["children"]["length"];j++){
                        var search = input.value;
                        search = search.toUpperCase().replace(/\s+/g, '');
                        if(examlist[i][j].includes(search)){
                            var li = document.createElement("li");
                            li.className = 'list-group-item';
                            li.innerHTML = '<div class="d-flex justify-content-between">'+
                                                examlist[i][j]+' '+ examlist[0][j]+' '+parsedDocument.querySelectorAll('b')[b]["innerText"] +
                                                '<div>'+
                                                    '<button type="button" class="btn btn-light btn-sm mr-2" id="copy_btn" >&#10063 </button>'+
                                                    '<button type="button" class="btn btn-light btn-sm" id="close_btn" >&#x2715 </button>'+
                                                '</div>'+
                                            '</div>';
                            $("#empty_text").fadeOut('slow');
                            ul.appendChild(li);
                        }
                    }   
                }
            }

            // Remove the input val
            input.value = '';
            $().alert('close')

        }else{
            if($("#html-content-holder").children('center').length==0){
                document.getElementById('html-content-holder').innerHTML +='<center class="mb-3"> Sınav Listesi Hazır Değil! </center>'
            } 
        }
        
        
    })
}

async function getExamList(className){

    fetch('https://stdportal.emu.edu.tr/examlist.asp')
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                console.log("200");
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(template,"text/html");
        var daysBody = parsedDocument.querySelectorAll('tbody')[0]["children"][0]["children"];
        var p1Body = parsedDocument.querySelectorAll('tbody')[1]["children"][0]["children"];
        var examlist = new Array;
        //console.log("for 1");
        var tempArray = new Array;
        for(var i=0; i <daysBody.length; i++){
            tempArray[i] = parsedDocument.querySelectorAll('tbody')[0]["children"][0]["children"][i]["innerText"];
        }
        examlist[0] = tempArray;

        for(var i=0; i <parsedDocument.querySelectorAll('tbody')[1]["children"]["length"]; i++){
            tempArray = [];
            for(var j=0;j<parsedDocument.querySelectorAll('tbody')[1]["children"][i]["children"]["length"];j++){
                tempArray[j] = parsedDocument.querySelectorAll('tbody')[1]["children"][i]["children"][j]["innerText"];
            }    
            examlist[1+i] = tempArray;
        }
        var table = document.getElementById('table');
        for(var i=0; i <parsedDocument.querySelectorAll('tbody')[1]["children"]["length"]; i++){
            for(var j=0;j<parsedDocument.querySelectorAll('tbody')[1]["children"][i]["children"]["length"];j++){
                if(examlist[i][j].includes(className)){
                    console.log('className : '+className +' '+examlist[0][j])
                    return examlist[0][j];
                }
            }   
        }
        
    })
}

// Global variable
var element = $("#html-content-holder"); 
          
// Global variable
var getCanvas; 

$("#btn-Preview-Image").on('click', function() {
    html2canvas(element, {
        onrendered: function(canvas) {
            $("#previewImage").append(canvas);
            getCanvas = canvas;
        }
    });
});
