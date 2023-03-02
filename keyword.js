

 let Keyvalue = [];
 let Secretvalue = [];
//  let k = ["A","B","C","D","E","F","G","H","I"];
let k = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"];
//  let k = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{,","}","~"];
 let ktest = [];
 let char = [];
 let schar = [];

   class Key{

      

      constructor(){

      this.key = k[Math.floor(Math.random()*(k.length))];

 
      }

     

   }


   function create(){

// ktest = new Key();

      // do
      
      // {


         char.push(new Key());
         char.push(new Key());
         char.push(new Key());
         char.push(new Key());
         char.push(new Key());
         char.push(new Key());
         // char.push(new Key());
         // char.push(new Key());
      

         // ktest = char[0].key+char[1].key+char[2].key+char[3].key;
         ktest = char[0].key+char[1].key+char[2].key+char[3].key+char[4].key+char[5].key;
         // ktest = char[0].key+char[1].key+char[2].key+char[3].key+char[4].key+char[5].key+char[6].key+char[7].key;
         // console.log(ktest);

         char.length=0;
         char=[];

   //    }


   //   while(Keyvalue.map(e => e==ktest).includes(true));

  

      // console.log((Keyvalue.map(e => e.key==ktest.key)));
      // console.log((Keyvalue.map(e => e.key==ktest.key)).includes(true));

         Keyvalue.push(ktest);

         // console.log((Keyvalue.map(e => e.key==ktest.key)));
         // console.log((Keyvalue.map(e => e.key==ktest.key)).includes(true));

         ktest.length=0;
         ktest=[];

         // console.log(ktest.key);

        

         // console.log(Keyvalue[0]);
         // console.log(Keyvalue[1]);
         // console.log(Keyvalue[2]);

   }

   function secretvalue(){


      // Secretvalue.push(new Key());


      for (let i=0; i<8;i++)
      
     {schar.push(new Key());}

   //   Secretvalue = schar[0].key+schar[1].key+schar[2].key+schar[3].key;
     Secretvalue = schar[0].key+schar[1].key+schar[2].key+schar[3].key+schar[4].key+schar[5].key;
   //   Secretvalue = schar[0].key+schar[1].key+schar[2].key+schar[3].key+schar[4].key+schar[5].key+schar[6].key+schar[7].key;
      console.log("The secret code is: "+Secretvalue, "¨Please wait...");
    
   }


   function compare(){




      do

      {     
         Keyvalue=0;
         Keyvalue=[];

         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         create();create();create();create();create();create();create();create();create();create();create();create();create();create();
         
 
      }

      while (!Keyvalue.map(e => e!=Secretvalue).includes(false));



         let find = Keyvalue.includes(Secretvalue);

     
         console.log(Keyvalue.includes(Secretvalue));
         console.log(Keyvalue.indexOf(Secretvalue));
         console.log(Keyvalue.length);

   
         console.log("find one: "+find+" at index"+Keyvalue.indexOf(Secretvalue));
         console.log("Characters size bracket was:"+k.length)

   }


   secretvalue();
   // console.log(Secretvalue[0].key);
   // create();
   // create();
   // create();

   // console.log(Keyvalue[0].key);

 
//    console.log(Keyvalue[0].key+Keyvalue[1].key);
   // console.log(Keyvalue.forEach(e => e.key==Secretvalue[0].key));

   // console.log((Keyvalue.map(e => e.key!=Secretvalue[0].key).includes(false)));
   // console.log((!Keyvalue.map(e => e.key!=Secretvalue[0].key).includes(false)));

//    console.log(Secretvalue[0].key==Keyvalue[0].key);

   // console.log((!Keyvalue.map(e => e.key!=ktest.key).includes(false)));


   compare();


