  let RedPyro_engi = false
    let redScout = false
    let RedSniper = false
    let RedMedic_Heavy = false
    let RedSpy = false
    let RedDemoman_Soldier = false
    let BlueSniper = false
    let BlueEngi_Pyro = false

// opens the part where red pyro and engie in the room
function open1(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_ctf.jpg')"
document.getElementById('redEngi').src = "images/red_team/red_engi.png"
document.getElementById('redPyro').src = "images/red_team/Pyro.png"
document.getElementById('redPyro').style.zIndex = "3"
document.getElementById('redEngi').style.zIndex = "3"
document.getElementById('back').style.zIndex = "3"


      document.getElementById('pyroRed').style.zIndex = "0"
     document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

//convo with red pyro and engie
let step = 0;
    let box
      let text

    function conversation() {
    document.getElementById('test').style.zIndex = "3"
      
    box = document.getElementById('test');
      box.style.display = 'block';
      text= document.getElementById('w');


      

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('test').style.zIndex = '0'
        text.innerHTML = '';
        RedPyro_engi = true
      }
    }

//  opens the part where red scout is in the room near red spawn
function open2(){
  step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_spawn.jpg')"
document.getElementById('redScout').src = "images/red_team/ScoutRed.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('redScout').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

//convo with red scout
function conversation2() {
   document.getElementById('conv2').style.zIndex = "3"
      box = document.getElementById('conv2');
     text = document.getElementById('h');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv2').style.zIndex = '0'
        text.innerHTML = '';
        redScout = true
      }
    }

    function open3(){
      step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_balcony.jpg')"
document.getElementById('redSniper').src = "images/red_team/SniperRed.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('redSniper').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

//convo with red sniper
function conversation3() {
     document.getElementById('conv3').style.zIndex = "3"
      box = document.getElementById('conv3');
     text = document.getElementById('txt3');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv3').style.zIndex = '0'
        text.innerHTML = '';
        RedSniper = true
      }
    }


        function open4(){
          step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_medic_heavy.jpg')"
document.getElementById('redMedic').src = "images/red_team/MedicRed.png"
document.getElementById('redHeavy').src = "images/red_team/HeavyRed.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('redMedic').style.zIndex = "3"
document.getElementById('redHeavy').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

    //convo with red scout
function conversation4() {
     document.getElementById('conv4').style.zIndex = "3"
      box = document.getElementById('conv4');
     text = document.getElementById('txt4');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv4').style.zIndex = '0'
        text.innerHTML = '';
        RedMedic_Heavy = true
      }
    }



            function open5(){
              step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_sold_demo.jpg')"
document.getElementById('redSoldier').src = "images/red_team/RedSoldier.png"
document.getElementById('redDemoman').src = "images/red_team/RedDemoman.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('redSoldier').style.zIndex = "3"
document.getElementById('redDemoman').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

    //convo with red scout
function conversation5() {
     document.getElementById('conv5').style.zIndex = "3"
      box = document.getElementById('conv5');
     text = document.getElementById('txt5');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv5').style.zIndex = '0'
        text.innerHTML = '';
        RedDemoman_Soldier = true
      }
    }

// opens the part where red spy is near the blue intel
                function open6(){
              step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_sold_demo.jpg')"
document.getElementById('redSpy').src = "images/red_team/RedSpy.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('redSpy').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

    //convo with red spy
function conversation6() {
     document.getElementById('conv6').style.zIndex = "3"
      box = document.getElementById('conv6');
     text = document.getElementById('txt6');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv6').style.zIndex = '0'
        text.innerHTML = '';
        RedSpy = true
      }
    }


    // opens the part where Blue engi and pyro is in the blue intel room
                function open7(){
              step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_sold_demo.jpg')"
document.getElementById('BlueEngineer').src = "images/blue_team/BlueEngi.png"
document.getElementById('BluePyro').src = "images/blue_team/BluePyro.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('BlueEngineer').style.zIndex = "3"
document.getElementById('BluePyro').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
}

    //convo with red spy
function conversation7() {
     document.getElementById('conv7').style.zIndex = "3"
      box = document.getElementById('conv7');
     text = document.getElementById('txt7');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv7').style.zIndex = '0'
        text.innerHTML = '';
        BlueEngi_Pyro = true
      }
    }

     // opens the part where Blue engi and pyro is in the blue intel room
        function open8(){
              step = 0;
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_sold_demo.jpg')"
document.getElementById('BlueSniper').src = "images/blue_team/BlueSniper.png"
document.getElementById('pyroRed').style.zIndex = "0"
document.getElementById('back').style.zIndex = "3"
document.getElementById('BlueSniper').style.zIndex = "3"


      document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
      
}


        //convo with blue sniper
function conversation8() {
     document.getElementById('conv8').style.zIndex = "3"
      box = document.getElementById('conv8');
     text = document.getElementById('txt8');

      box.style.display = 'block';

      if (step === 0) {
        text.innerHTML = 'Miss Pauling: Okay. I was told this briefcase would be “secure,” not guarded by a man who talks to machines and a… whatever that is.';
        step++;
      } else if (step === 1) {
        text.innerHTML = 'Engineer : Ma’am, that “whatever” has repelled twelve intruders, burned three spies, and hugged me twice today. I’d say we’re doin’ alright.';
        step++;
      } else if (step === 2) {
        text.innerHTML = 'Pyro (waves enthusiastically): Mmmph!';
        step++;
      }else if (step === 3){
        text.innerHTML = 'Miss Pauling (sighs): I don’t have time for this. BLU’s been making coordinated pushes through the vents. If they get this intel, the Administrator is going to—(grimaces)—well, I don’t want to find out.';
        step++;
      } else if (step === 4) {
        text.innerHTML = 'Engineer: Don’t you worry. I’ve got sentries watchin’ every door, every vent, and one spot I ain’t even sure exists anymore.';
        step++;
      } else if (step === 5) {
        text.innerHTML = 'Miss Pauling: That’s… not reassuring.';
        step++;
      }
      
       else {
        document.getElementById('conv8').style.zIndex = '0'
        text.innerHTML = '';
        BlueSniper = true
      }
    }

    function back1(){
      // map change
      document.getElementById('map').style.backgroundImage = 'url("images/Background/map.jpg")';
document.getElementById('back').style.zIndex = "0"  


      // Icons to show
      document.getElementById('pyroRed').style.zIndex = "3"
      document.getElementById('engineerRed').style.zIndex = "3"
      document.getElementById('scoutRed').style.zIndex = "3"
      document.getElementById('sniperRed').style.zIndex = "3"
      document.getElementById('medicRed').style.zIndex = "3"
      document.getElementById('soldierRed').style.zIndex = "3"
      document.getElementById('demomanRed').style.zIndex = "3"
      document.getElementById('spyRed').style.zIndex = "3"
      document.getElementById('heavyRed').style.zIndex = "3"
      document.getElementById('pyroBlue').style.zIndex = "3"
      document.getElementById('sniperBlue').style.zIndex = "3"
      document.getElementById('engineerBlue').style.zIndex = "3"

      // hide characters
      document.getElementById('redPyro').style.zIndex = "0"
      document.getElementById('redEngi').style.zIndex = "0"
      document.getElementById('redScout').style.zIndex = "0"
      document.getElementById('redSniper').style.zIndex = "0"
      document.getElementById('redMedic').style.zIndex = "0"
      document.getElementById('redHeavy').style.zIndex = "0"
      document.getElementById('redSoldier').style.zIndex = "0"
      document.getElementById('redDemoman').style.zIndex = "0"
            document.getElementById('redSpy').style.zIndex = "0"
      document.getElementById('BluePyro').style.zIndex = "0"
      document.getElementById('BlueEngineer').style.zIndex = "0"
      document.getElementById('BlueSniper').style.zIndex = "0"
    }
  

    // last part

   function test(){ 
 if(RedPyro_engi = true && redScout  && RedSniper && RedMedic_Heavy && RedSpy && RedDemoman_Soldier  && BlueSniper && BlueEngi_Pyro){
  console.log("Visi true")
  document.getElementById('map').style.backgroundImage = "url('images/Background/BackgroundComp.png')"
  document.getElementById('engineerRed').style.zIndex = "0"
      document.getElementById('scoutRed').style.zIndex = "0"
      document.getElementById('sniperRed').style.zIndex = "0"
     document.getElementById('medicRed').style.zIndex = "0"
      document.getElementById('soldierRed').style.zIndex = "0"
      document.getElementById('demomanRed').style.zIndex = "0"
      document.getElementById('spyRed').style.zIndex = "0"
      document.getElementById('heavyRed').style.zIndex = "0"
      document.getElementById('pyroBlue').style.zIndex = "0"
      document.getElementById('engineerBlue').style.zIndex = "0"
      document.getElementById('sniperBlue').style.zIndex = "0"
      document.getElementById('pyroRed').style.zIndex = "0"
 }
 else{
    document.getElementById('txt9').style.zIndex = "5"
 }
}


function close7(){
  document.getElementById('txt9').style.zIndex = "0"
}