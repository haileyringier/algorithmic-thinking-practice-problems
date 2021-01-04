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

