new Vue({
  el: "#app",
  data: {
    showStart: true,
    myHealth: 100,
    monsterHealth: 100,
    myAttackPw: 0,
    monsterAttackPw: 0,
    attackVector: []
  },
  methods: {
    attack: function() {
      this.myAttackPw = Math.floor(Math.random() * 5);
      this.monsterAttackPw = Math.floor(Math.random() * 2);
      this.myHealth =
        this.monsterAttackPw < this.myHealth
          ? this.myHealth - this.monsterAttackPw
          : 0;
      this.monsterHealth =
        this.myAttackPw < this.monsterHealth
          ? this.monsterHealth - this.myAttackPw
          : 0;
      //updates the attack vector
      this.attackVector.push("You hit " + this.myAttackPw);
      this.attackVector.push("Monster hit " + this.monsterAttackPw);
    },
    powerAttack: function() {
      this.myAttackPw = Math.floor(Math.random() * 10);
      this.monsterAttackPw = Math.floor(Math.random() * 2);
      this.myHealth =
        this.monsterAttackPw < this.myHealth
          ? this.myHealth - this.monsterAttackPw
          : 0;
      this.monsterHealth =
        this.myAttackPw < this.monsterHealth
          ? this.monsterHealth - this.myAttackPw
          : 0;
      //updates the attack vector
      this.attackVector.push("You hit " + this.myAttackPw);
      this.attackVector.push("Monster hit " + this.monsterAttackPw);
    },
    heal: function() {
      var power = Math.floor(Math.random() * 10);
      this.myHealth =
        this.myHealth + power <= 100 ? this.myHealth + power : 100;
      power = Math.floor(Math.random() * 2);
      this.myHealth = this.myHealth - power;
    },
    giveup: function() {
      this.myHealth = 80;
      this.monsterHealth = 80;
      this.showStart = true;
      this.attackVector = [];
    }
  },
  computed: {
    myHealthStyle: function() {
      return {
        width: this.myHealth + "%"
      };
    },
    monsterHealthStyle: function() {
      return {
        width: this.monsterHealth + "%"
      };
    }
  },
  watch: {
    myHealth: function() {
      if (this.myHealth === 0) {
        alert("You have been killed!");
      }
    },
    monsterHealth: function() {
      if (this.monsterHealth === 0) {
        alert("You win!");
      }
    }
  }
});
