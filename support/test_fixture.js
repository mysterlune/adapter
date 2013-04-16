var data = {}
data.arm = [
    {
        id: 1
        , name: 'left_arm'
        , hand: [1]
    }
    , {
        id: 2
        , name: 'right_arm'
        , hand: [2]
    }
];

data.hand = [
    {
        id: 1
        , position: 'left_hand'
        , fingers: [1,2,3,4,5]
        , arm: [1]
    }
    , {
        id: 2
        , position: 'right_hand'
        , fingers: [6,7,8,9,10]
        , arm: [2]
    }
];

data.finger = [
    {
        id: 1
        , name: 'left_thumb'
        , hand: [1]
    }
    , {
        id: 2
        , name: 'left_index'
        , hand: [1]
    }
    , {
        id: 3
        , name: 'left_middle'
        , hand: [1]
    }
    , {
        id: 4
        , name: 'left_ring'
        , hand: [1]
    }
    , {
        id: 5
        , name: 'left_pinkie'
        , hand: [1]
    }
    , {
        id: 6
        , name: 'right_pinkie'
        , hand: [2]
    }
    , {
        id: 7
        , name: 'right_ring'
        , hand: [2]
    }
    , {
        id: 8
        , name: 'right_middle'
        , hand: [2]
    }
    , {
        id: 9
        , name: 'right_index'
        , hand: [2]
    }
    , {
        id: 10
        , name: 'right_thumb'
        , hand: [2]
    }
];

module.exports = data;