// Chapter 1 - Unique Snowflakes

// helper function to find identical integers

function identify_identical(a, n) {
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(a[i] == a[j]){
                console.log("Twin integers found.")
            }
        }
    console.log("No two snowflakes are alike.")
    }
}

// helper function for rightward check

function identical_right(snow1, snow2, start){
    let snow2_index = 0
    for(let i = 0; i < 6; i++){
        snow2_index = start + i
        if(snow2_index >= 6){
            snow2_index = snow2_index - 6
            if(snow1[i] !== snow2[snow2_index]){
                return 0
            }
            return 1
        }
    }
}

// improving the function above using the mod operator

function identical_right(snow1, snow2, start){
    for(let offset = 0;offset < 6; offset++){
        if(snow1[offset] != snow2[(start + offset) % 6]){
            return 0 
        }
        return 1
    }
}

// healper function for leftward check

function identical_left(snow1, snow2, start){
    let snow2_index = 0
    for(let offset = 0; offset < 6; offset++){
        snow2_index = start - offset
        if(snow2_index < 0){
            snow2_index = snow2_index + 6
        }
        if(snow1[offset] != snow2[snow2_index]){
            return 0 
        }
    return 1
    }
}

// are the snowflakes identical?

function are_identical(snow1, snow2){
    for(let start = 0; start < 6; start++){
        if(identical_right(snow1, snow2, start)){
            return 1
        }
        if(identical_left(snow1, snow2, start)){
            return 1
        }
    }
    return 0 
}