class Perceptron {

    constructor() {
        this.weights = [];
        this.bias = 0;
    }

    predict(features) {

        if (features.length !== this.weights.length) return null;

        let score = 0;

        for (let i = 0; i < this.weights.length; i++) {
            score += this.weights[i] * features[i];
        }

        score += this.bias;

        return score > 0 ? 1 : 0;
    }

    train(features, result) {

        if (features.length !== this.weights.length) {
            this.weights = features;
            this.bias = 1;
        }

        let prediction = this.predict(features);

        if (prediction !== result) {

            let difference = result - prediction;

            for (let i = 0; i < this.weights.length; i++) {
                this.weights[i] += difference * features[i];
            }

            this.bias += difference;
        }
    }
}

let p = new Perceptron();

p.train([0, 1], 1);
p.train([-1, 0], 0);
p.train([0, 1], 1);

console.log(p.predict([-1, 0]));
console.log(p.predict([0, 5]));