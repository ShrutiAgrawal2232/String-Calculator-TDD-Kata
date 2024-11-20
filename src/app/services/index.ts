class StringCalculator {
  add(numbers: any) {
    if (numbers.length < 2) {
      if (numbers === "") {
        return 0;
      } else {
        return this.convertToInt(numbers);
      }
    } else {
      let delimiter = ",";
      if (/\/\/(.*)\n(.*)/.test(numbers)) {
        delimiter = numbers.charAt(2);
        numbers = numbers.substring(4);
      }

      const numList = this.splitNumbers(numbers, `${delimiter}|\n`);
      return this.sum(numList);
    }
  }

  splitNumbers(numbers: any, divider: any) {
    return numbers.split(new RegExp(divider));
  }

  convertToInt(num: any) {
    return parseInt(num, 10);
  }

  sum(numbers: any) {
    let total = 0;
    let negativeString = [];

    for (const number of numbers) {
      const num = this.convertToInt(number);
      if (num < 0) {
        negativeString.push(number);
      }
      if (num < 1000) {
        total += num;
      }
    }

    if (negativeString.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeString.join(",")}`);
    }

    return total;
  }
}

const stringCalculator = new StringCalculator();
export default stringCalculator;