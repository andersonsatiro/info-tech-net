const servicesListItems = Array.from(document.querySelectorAll('.services-list-item'));

servicesListItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('focused-item');
        const itemFooter = document.querySelector('.item-footer')

        if(itemFooter){
            itemFooter.classList.add('item-footer')
            itemFooter.style.display = 'flex'
        }

        servicesListItems.forEach((otherItem) => {
            console.log(item === otherItem)
            if(otherItem !== item) {
                console.log('otherItem', otherItem)
                otherItem.classList.remove('focused-item');
                const otherItemFooter = document.querySelector('h2')

                if(otherItemFooter){
                    itemFooter.classList.remove('item-footer')
                    itemFooter.style.display = 'none'
                }
            }
        })
    })
})
