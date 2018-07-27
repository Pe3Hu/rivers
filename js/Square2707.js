
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
			this.r = this.a/(2+Math.sqrt(2));//this.a/2/cos(PI/8);
			//this.rand = Math.floor(Math.random()*8);
      this.rand = tick%8;
      tick++;
		  let angle = TWO_PI / 8;
			for (let a = angle/2; a < TWO_PI; a += angle) {
				let sx = this.center.x + cos(a) * this.r;
				let sy = this.center.y + sin(a) * this.r;
				this.borderVertexs.push({x:sx, y:sy})
			}
			angle = TWO_PI / 4;
			for (let a = 0; a < TWO_PI; a += angle) {
				let sx = this.center.x + cos(a) * this.a/4;
				let sy = this.center.y + sin(a) * this.a/4;
				this.centerVertexs.push({x:sx, y:sy})
			}
			for (let a = angle/2; a < TWO_PI; a += angle) {
				let sx = this.center.x + cos(a) * this.a/4;
				let sy = this.center.y + sin(a) * this.a/4;
				this.centerVertexs.push({x:sx, y:sy})
			}
			this.vertexs.push(
				{x:this.x, y:this.y+this.r/2},
				{x:this.x+this.r/2, y:this.y},
				{x:this.x, y:this.y-this.r/2},
				{x:this.x-this.r/2, y:this.y});
	}

 show() {
			fill(	this.color[0], this.color[1], this.color[2]);


			//noFill();
			//rect(this.x, this.y, this.a/2, this.a/2)
				strokeWeight(0.1)
  			quad(this.vertexs[0].x, this.vertexs[0].y,
					this.vertexs[1].x, this.vertexs[1].y,
					this.vertexs[2].x, this.vertexs[2].y,
					this.vertexs[3].x, this.vertexs[3].y);

				/*quad(this.centerVertexs[0].x, this.centerVertexs[0].y,
					this.centerVertexs[1].x, this.centerVertexs[1].y,
					this.borderVertexs[1].x, this.borderVertexs[1].y,
					this.borderVertexs[0].x, this.borderVertexs[0].y,);*/
          //border
          let vertexB = {first: this.borderVertexs[this.rand],
            second: this.borderVertexs[(this.rand+1)%8]};
          let parity = (this.rand)%2*4;
          let whole = Math.floor(this.rand/2);
          //center
          console.log(this.rand, (this.rand+1)%8, parity+whole, parity+(whole+1)%4);
          let vertexC = {first: this.centerVertexs[parity+whole],
            second: this.centerVertexs[parity+(whole+1)%4]};
          quad(
            vertexC.second.x, vertexC.second.y,
            vertexC.first.x, vertexC.first.y,
            vertexB.first.x, vertexB.first.y,
            vertexB.second.x, vertexB.second.y,
          )

				strokeWeight(0.1);
  			//polygon(this.center.x, this.center.y, this.r, 	this.n, PI/this.n);

				for (let i=0;i<0;i++)//this.borderVertexs.length
					this.triangles.push([
						this.center.x,this.center.y,
						this.borderVertexs[i].x,this.borderVertexs[i].y,
						this.borderVertexs[(i+1)%this.borderVertexs.length].x,this.borderVertexs[(i+1)%this.borderVertexs.length].y])

			for (let obj of this.triangles)
  			triangle(obj[0], obj[1], obj[2], obj[3], obj[4], obj[5]);
	}
}
