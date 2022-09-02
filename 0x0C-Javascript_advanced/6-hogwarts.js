class studentHogwarts(){
    let privateScore = 0;
    let name = null;

    constructor(name){
        this.name = name;
    }
    #changeScoreBy(points){
        privateScore += points;
    }
    rewardStudent(){
        changeScoreBy(1);
    }
    penalizeStudent(){
        changeScoreBy(-1);
    }
    getScore(){
        return this.name + ':' + this.score;
    }

}

harry = new studentHogwarts('Harry');

for(let i = 0; i < 4; i++)
{
    harry.rewardStudent();
}

console.log(harry.getScore());

Draco = new studentHogwarts('Draco');
Draco.rewardStudent();
for(let i = 0; i < 4; i++){
    Draco.penalizeStudent();
}
console.log(Draco.getScore());