
var profile;
var we;
var iam;
var r;
var details;
var input;
var input2;
var input3;
var input4;
var done;
var hi;
var me;
var me2;
var next;
var the;
var you;
var you2;
var you3;
var timetable;
var final;
var name;


class Form {


    constructor() {

       
      profile = createImg("Images/profile.png");
        profile.position(100,150);

        iam = createElement('h1', 'Hi champ!!');
        iam.position(140,380);
        iam.style("color","red");

        r = createElement('h1', 'let us know you');
        r.position(110,420);
        r.style("color","yellow");

        details = createElement('h2', 'Please fill in your details...');
        details.position(90,480);
        details.style("background-color","purple");

        input = createInput("Please write your Name");
        input.position(10,550)
        input.style("background-color","cyan");

        input2 = createInput("Please tell your batch");
        input2.position(220,550)
        input2.style("background-color","green");

        input3 = createInput("Your favourite subject");
        input3.position(10,690)
        input3.style("background-color","orange");

        input4 = createInput("Your class");
        input4.position(220,690)
        input4.style("background-color","pink");

        done = createButton("Done!");
        done.position(170,760)
        done.style("background-color","yellow");

        hi = createElement('h1');
        

        me = createElement('h2', 'Welcome to the first step to be a ');
        me.position(40,150);
        me.style("background-color","pink");
        me.hide();

        me2 = createElement('h1', 'Brilliant ');
        me2.position(140,190);
        me2.style("background-color","yellow");
        me2.hide();

        the = createElement('h2', 'Some instructions to follow :- ');
        the.position(70,290);
        the.style("background-color","orange");
        the.hide();

        you = createElement('h2', '1) Follow the timetable prcicely ');
        you.position(50,390);
        you.style("background-color","pink");
        you.hide();

        you2 = createElement('h2', '2) Complete everything on time...');
        you2.position(40,430);
        you2.style("background-color","purple");
        you2.hide();

        you3 = createElement('h2', '3) Focus whatever asked here...');
        you3.position(40,470);
        you3.style("background-color","cyan");
        you3.hide();

        next = createButton("Next");
        next.position(170,760)
        next.style("background-color","yellow");
        next.hide();

        final = createElement('h2', 'Your brand new timetable!!!');
        final.position(50,120);
        final.style("background-color","grey");
        final.hide();

        timetable = createImg("Images/timetable.png");
        timetable.position(-8,170);
        timetable.hide();

        



        done.mousePressed(()=>{
         profile.hide();
         iam.hide();
         r.hide();
         details.hide();
         input.hide();
         input2.hide();
         input3.hide();
         input4.hide();
         done.hide();

         name = input.value();
         hi.html("Hi "+ name + " !!");
         hi.position(140,100);
         hi.style("background-color","red");
         //hi.hide();
         me.show();
         me2.show();
         next.show();
         the.show();
         you.show();
         you2.show();
         you3.show();
        });

        next.mousePressed(()=>{
          hi.hide();
         me.hide();
         me2.hide();
         next.hide();
         the.hide();
         you.hide();
         you2.hide();
         you3.hide();
         final.show();
         timetable.show();
 
         });
        
      
    }
  
    display(){

      

     

        
         



  
    }
  }
  