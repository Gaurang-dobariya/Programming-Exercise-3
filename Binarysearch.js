let arr = [1, 5, 9, 20, 21, 25, 33]

function search(arr, element, start, end) {

    let mid = (start + end) / 2

    if (start > end) {

        return false

    }

    if (arr[mid] === element) {

        return true

    }

    if (arr[mid] > element) {

        return search(arr, element, start, mid - 1)

    }
    else {

        return search(arr, element, mid + 1, end)

    }

}

let result = search(arr, 1, 0, arr.length)
console.log(result);