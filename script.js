let step = 0;

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
      const box = document.getElementById('test');
      const text = document.getElementById('w');

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