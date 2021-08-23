
export default function measuring_system() {
    let select = document.querySelector('#si')
    let inch
    // console.log(select);

    const SI = {
        'metr': 1,
        'dm': 0, 
    }

    select.addEventListener('change', () => {
        if (select.value === 'metr') {
            inch = SI.metr
            console.log(SI.metr);
            console.log('метрическая');
        }
        else {
            inch = SI.metr * 2.54
            console.log('дюймовая');
        }
    })
    return inch
}



