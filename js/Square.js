
class Square {
	constructor (x, y, a, color) {
			this.x = x;
			this.y = y;
			this.a = a;
			this.center = {x:this.x+this.a/2, y:this.y+this.a/2}
			this.color = color;
			this.vertexs = [];
			this.borderVertexs = [];
			this.centerVertexs = [];
			this.triangles = [];
			this.quads = [];
			this.l = this.a/(2+Math.sqrt(2));
      this.r = this.l*Math.sqrt(2);//this.a/2/cos(PI/8);
			this.rand = Math.floor(Math.random()*8);
      do {
        this.couple = Math.floor(Math.random()*8);
      }
      while(Math.abs(this.couple-this.rand)%7<2)//(this.rand+4)%8;
      //this.rand = tick%8;
      tick++;

			this.borderVertexs.push(
        {x:this.center.x+this.a/2, y:this.center.y+this.r/2},
        {x:this.center.x+this.r/2, y:this.center.y+this.a/2},
        {x:this.center.x-this.r/2, y:this.center.y+this.a/2},
        {x:this.center.x-this.a/2, y:this.center.y+this.r/2},
        {x:this.center.x-this.a/2, y:this.center.y-this.r/2},
        {x:this.center.x-this.r/2, y:this.center.y-this.a/2},
        {x:this.center.x+this.r/2, y:this.center.y-this.a/2},
        {x:this.center.x+this.a/2, y:this.center.y-this.r/2},
      )
      this.centerVertexs.push(
        {x:this.center.x+this.l, y:this.center.y},
        {x:this.center.x, y:this.center.y+this.l},
        {x:this.center.x-this.l, y:this.center.y},
        {x:this.center.x, y:this.center.y-this.l},
        {x:this.center.x+this.r/2, y:this.center.y+this.r/2},
        {x:this.center.x-this.r/2, y:this.center.y+this.r/2},
        {x:this.center.x-this.r/2, y:this.center.y-this.r/2},
        {x:this.center.x+this.r/2, y:this.center.y-this.r/2}
      )

			this.vertexs.push(
				{x:this.x, y:this.y+this.l},
				{x:this.x+this.l, y:this.y},
				{x:this.x, y:this.y-this.l},
				{x:this.x-this.l, y:this.y});
	}

 show() {
			fill(	this.color[0], this.color[1], this.color[2]);
			//noFill();
			//rect(this.x, this.y, this.a/2, this.a/2)
			//strokeWeight(0.1)
			quad(this.vertexs[0].x, this.vertexs[0].y,
				this.vertexs[1].x, this.vertexs[1].y,
				this.vertexs[2].x, this.vertexs[2].y,
				this.vertexs[3].x, this.vertexs[3].y);

      noStroke();
      //if ((this.rand)%2!=1)
        quad(this.centerVertexs[0].x, this.centerVertexs[0].y,
          this.centerVertexs[1].x, this.centerVertexs[1].y,
          this.centerVertexs[2].x, this.centerVertexs[2].y,
          this.centerVertexs[3].x, this.centerVertexs[3].y);
      //else
        quad(this.centerVertexs[4].x, this.centerVertexs[4].y,
          this.centerVertexs[5].x, this.centerVertexs[5].y,
          this.centerVertexs[6].x, this.centerVertexs[6].y,
          this.centerVertexs[7].x, this.centerVertexs[7].y);
      let vertexB = {first: this.borderVertexs[this.rand],
        second: this.borderVertexs[(this.rand+1)%8]};
      let parity = (this.rand)%2*4;
      let whole = Math.floor(this.rand/2);
      let vertexC = {first: this.centerVertexs[parity+whole],
        second: this.centerVertexs[parity+(whole+1)%4]};
      quad(
        vertexC.second.x, vertexC.second.y,
        vertexC.first.x, vertexC.first.y,
        vertexB.first.x, vertexB.first.y,
        vertexB.second.x, vertexB.second.y,
      )
      vertexB = {first: this.borderVertexs[this.couple],
        second: this.borderVertexs[(this.couple+1)%8]};
      parity = (this.couple)%2*4;
      whole = Math.floor(this.couple/2);
      vertexC = {first: this.centerVertexs[parity+whole],
        second: this.centerVertexs[parity+(whole+1)%4]};
      quad(
        vertexC.second.x, vertexC.second.y,
        vertexC.first.x, vertexC.first.y,
        vertexB.first.x, vertexB.first.y,
        vertexB.second.x, vertexB.second.y,
      )
	}
}
