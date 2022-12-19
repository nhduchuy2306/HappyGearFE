
const formatPrice = {
    VNDong (number){
        const temp = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        })
        return temp.format(number)
    } 
}

export default formatPrice 