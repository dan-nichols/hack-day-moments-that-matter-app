export default {
    container: {
        flexDirection:'row',
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingTop:10,
        paddingBottom:10
    },
    verticalSpacing: {
        paddingTop:10,
        paddingBottom:10
    },
    itemFont: {
        fontSize: 17,
        color: 'white'
    },
    name: {
        textAlign: 'left',
        flex: 0.45
    },
    amount: {
        textAlign: 'right',
        flex: 0.35,
        paddingRight: 10
    },
    diff: {
        textAlign: 'center',
        flex: 0.2,
        borderRadius:10,
        overflow: 'hidden'
    },
    diffPositive: {
        backgroundColor: '#45CD46'
    },
    diffNegative: {
        backgroundColor: '#CD423E'
    },
    selected: {
        backgroundColor: '#3d373a'
    }
};
