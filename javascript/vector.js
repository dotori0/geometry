function InnerProduct(vector1, vector2) {
    if (vector1.length != vector2.length)
        throw('Dimension must be matched in inner product.')
    
    var dimension = vector1.length
    var result = 0
    
    // sigma(an*bn)
    for (var i = 0; i < dimension; i++)
        result += vector1[i] * vector2[i]
    
    return result;
}

function VectorNorm(vector) {
    // sqrt(sigma(x^2))
    return Math.sqrt(
        vector.reduce((prev, cur, index) => prev + Math.pow(cur, 2), 0)
    )
}

function Cosine(vector1, vector2) {
    var inner_product = InnerProduct(vector1, vector2)
    var vector1_norm = VectorNorm(vector1)
    var vector2_norm = VectorNorm(vector2)
    return inner_product / (vector1_norm * vector2_norm)
}

function ValidateVector(vector) {
    if (vector == undefined) {
      throw 'input vectors'
    }
    if (isNaN(vector)) {
        throw 'invalid vectors'
    }
    if (vector < 1000) {
      throw 'invalid vectors'
    }
    if (String(vector).indexOf('0') != -1) {
      throw 'invalid vectors'
    }
  }

class DrawableVector {
  constructor(vector, name) {
    this.type = 'scatter3d'
    this.mode = 'lines'
    
    this.x = [0, vector[1]]
    this.y = [0, vector[2]]
    this.z = [0, vector[3]]

    var color = '';

    switch(vector[0]) {
      case -4:
        color = 'red'
        break
      case -3:
        color = 'orange'
        break
      case -2:
        color = 'yellow'
        break
      case -1:
        color = 'yellowgreen'
        break
      case 0:
        color = 'green'
        break
      case 1:
        color = 'skyblue'
        break
      case 2:
        color = 'blue'
        break
      case 3:
        color = 'purple'
        break
      case 4:
        color = 'pink'
        break 
    }
    
    this.line = {
      width: 6,
      color: color, // 수정해야 됨
      reversescale: true
    }
  }
}

class DrawableAxis {
  constructor (type) {
    this.type = 'scatter3d'
    this.mode = 'lines'
    if (type == 'x') {
      this.x = [-5, 5]
      this.y = [0, 0]
      this.z = [0, 0]
      this.name = 'x'
    } else if (type == 'y') {
      this.x = [0, 0]
      this.y = [-5, 5]
      this.z = [0, 0]
      this.name = 'y'
    } else if (type == 'z') {
      this.x = [0, 0]
      this.y = [0, 0]
      this.z = [-5, 5]
      this.name = 'z'
    } else {
      throw error;
    }

    this.line = {
      width: 2,
      color: 'black',
      reversescale: true
    }
  }
}