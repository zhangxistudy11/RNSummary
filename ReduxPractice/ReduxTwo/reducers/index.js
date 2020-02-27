const defaultState = {
    inputValue : '请输入数字',
    list : ['发范德萨',
            '发打发第三方',
            '发了富家大室'
            ]
}

export default (state = defaultState,action)=>{
     console.log(state,action) 
    return state;
}