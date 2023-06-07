import Modal from "../components/Modal";
import Button from "../components/Button";
import { Children, useState } from "react";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    const modal = <Modal onClose={handleClose} actionBar={<Button onClick={handleClose}>I accept</Button>}>
       <p>lorem impsum</p>
    </Modal>
    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Show modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec finibus nisl, nec malesuada purus. Suspendisse magna magna, pretium ut blandit eget, sagittis a tortor. Nullam ac sollicitudin ipsum. In non ligula leo. Suspendisse interdum sodales tellus et posuere. Morbi sagittis tellus vitae libero pulvinar consequat. Proin sollicitudin quam non cursus suscipit. Sed dictum, eros ac ultricies tempor, urna metus aliquet mi, non pharetra ipsum ante vitae augue. Sed dapibus vestibulum ipsum, ultrices efficitur lectus bibendum varius. Aenean dictum nec mi sed rhoncus. Phasellus non dolor pharetra, sodales magna id, iaculis turpis.

Vivamus non urna eu felis pretium laoreet rutrum ut arcu. Mauris erat magna, ultricies vitae odio a, accumsan viverra dolor. In eleifend ut sem sed malesuada. Aenean faucibus ut massa nec sodales. Morbi efficitur pulvinar neque a pellentesque. Morbi risus mauris, laoreet et semper in, condimentum eget massa. Integer hendrerit purus quis massa tincidunt, sit amet scelerisque massa hendrerit. Donec libero quam, elementum eu mi at, lobortis blandit arcu. Sed sit amet elit vitae diam tincidunt interdum. Praesent eget lacinia elit, vitae congue magna. Curabitur rutrum dolor porttitor fringilla facilisis. Pellentesque sit amet laoreet enim, sit amet bibendum odio. Etiam libero enim, rhoncus non mi id, tempus varius libero. Ut porttitor orci quis metus facilisis mollis.

Etiam ac turpis at nibh bibendum dapibus sit amet quis augue. Quisque at commodo nisl, nec lobortis ante. Nullam non nulla sed ante elementum posuere at vitae tortor. Vestibulum eu massa malesuada, pellentesque nibh ullamcorper, accumsan magna. Integer a metus porttitor enim accumsan dapibus. Proin urna nulla, vulputate quis nunc non, accumsan hendrerit tortor. Proin pellentesque tincidunt mi nec sollicitudin.
        </p></div>
    )
}

export default ModalPage;