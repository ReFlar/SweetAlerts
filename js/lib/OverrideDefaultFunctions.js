import Alert from 'flarum/components/Alert';

export default function () {
    Alert.prototype.view = function () {
        const attrs = Object.assign({}, this.props);


        console.log(attrs)

        const type = attrs['type'];

        const title = attrs['children'][0]

        let debug = false;

        if (attrs['controls']) {
            debug = attrs['controls'][0]['props'];
        }

        const onClose = attrs['ondismiss'];

        swal({
            toast: true,
            position: 'bottom-start',
            showCancelButton: debug ? true : false,
            cancelButtonColor: '#d83e3e',
            timer: 3000,
            confirmButtonColor: '#B4F1AF',
            background: $("body").css("background-color") === 'rgb(20, 27, 31)' ? '#141b1f' : '#fff',
            cancelButtonText: debug ? debug['children'] : '',
            title,
            type,
            onClose,
        }).then(result => {
            if (result['dismiss'] === 'cancel') {
                debug['onclick']()
            }
        })

        return (
            <div style="display: none">
                <p>Oops</p>
            </div>
        )
    }
}

