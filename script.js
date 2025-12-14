
// opens the part where red pyro and engie in the room
function open1(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_ctf.jpg')"
document.getElementById('redEngi').src = "images/red_team/red_engi.png"
document.getElementById('redPyro').src = "images/red_team/Pyro.png"
}

//convo with red pyro and engie
let step = 0;
    let box
      let text

    function conversation() {
    document.getElementById('test').style.position = 'absolute'
    document.getElementById('test').style.width = '40%'
    document.getElementById('test').style.height = '20%'
    document.getElementById('test').style.left = '30%'
    document.getElementById('test').style.backgroundColor = 'black'
    document.getElementById('test').style.color = 'white'
    document.getElementById('test').style.fontSize = '30px'
    document.getElementById('test').style.border = 'white 1px solid'
    document.getElementById('test').style.bottom = '0'
    document.getElementById('w').style.position = 'absolute'
    document.getElementById('w').style.left = '4%'
      
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
        box.remove()

      }
    }

//  opens the part where red scout is in the room near red spawn
function open2(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_spawn.jpg')"
document.getElementById('redScout').src = "images/red_team/ScoutRed.png"
}

//convo with red scout
function conversation2() {
    document.getElementById('conv2').style.position = 'absolute'
    document.getElementById('conv2').style.width = '40%'
    document.getElementById('conv2').style.height = '20%'
    document.getElementById('conv2').style.left = '30%'
    document.getElementById('conv2').style.backgroundColor = 'black'
    document.getElementById('conv2').style.color = 'white'
    document.getElementById('conv2').style.fontSize = '30px'
    document.getElementById('conv2').style.border = 'white 1px solid'
    document.getElementById('conv2').style.bottom = '0'
    document.getElementById('h').style.position = 'absolute'
    document.getElementById('h').style.left = '4%'
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
        box.remove()

      }
    }

    function open3(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_balcony.jpg')"
document.getElementById('redSniper').src = "images/red_team/SniperRed.png"
}

//convo with red scout
function conversation3() {
    document.getElementById('conv3').style.position = 'absolute'
    document.getElementById('conv3').style.width = '40%'
    document.getElementById('conv3').style.height = '20%'
    document.getElementById('conv3').style.left = '30%'
    document.getElementById('conv3').style.backgroundColor = 'black'
    document.getElementById('conv3').style.color = 'white'
    document.getElementById('conv3').style.fontSize = '30px'
    document.getElementById('conv3').style.border = 'white 1px solid'
    document.getElementById('conv3').style.bottom = '0'
    document.getElementById('txt3').style.position = 'absolute'
    document.getElementById('txt3').style.left = '4%'
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
        box.remove()

      }
    }


        function open4(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_medic_heavy.jpg')"
document.getElementById('redMedic').src = "images/red_team/MedicRed.png"
document.getElementById('redHeavy').src = "images/red_team/HeavyRed.png"
}

    //convo with red scout
function conversation4() {
    document.getElementById('conv4').style.position = 'absolute'
    document.getElementById('conv4').style.width = '40%'
    document.getElementById('conv4').style.height = '20%'
    document.getElementById('conv4').style.left = '30%'
    document.getElementById('conv4').style.backgroundColor = 'black'
    document.getElementById('conv4').style.color = 'white'
    document.getElementById('conv4').style.fontSize = '30px'
    document.getElementById('conv4').style.border = 'white 1px solid'
    document.getElementById('conv4').style.bottom = '0'
    document.getElementById('txt4').style.position = 'absolute'
    document.getElementById('txt4').style.left = '4%'
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
        box.remove()

      }
    }



            function open5(){
document.getElementById('map').style.backgroundImage = "url('images/Background/Red_sold_demo.jpg')"
document.getElementById('redSoldier').src = "images/red_team/RedSoldier.png"
document.getElementById('redDemoman').src = "images/red_team/RedDemoman.png"
}

    //convo with red scout
function conversation5() {
    document.getElementById('conv5').style.position = 'absolute'
    document.getElementById('conv5').style.width = '40%'
    document.getElementById('conv5').style.height = '20%'
    document.getElementById('conv5').style.left = '30%'
    document.getElementById('conv5').style.backgroundColor = 'black'
    document.getElementById('conv5').style.color = 'white'
    document.getElementById('conv5').style.fontSize = '30px'
    document.getElementById('conv5').style.border = 'white 1px solid'
    document.getElementById('conv5').style.bottom = '0'
    document.getElementById('txt5').style.position = 'absolute'
    document.getElementById('txt5').style.left = '4%'
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
        box.remove()

      }
    }