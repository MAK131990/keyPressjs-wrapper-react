import KeyPress from 'keypress.js'

const listener = new KeyPress.Listener()
window.listener = listener;
export default function useKeyPress(elem) {

    const addCombo = (keyCombo, cb) => {
        return listener.simple_combo(keyCombo, cb,);
    }

    const removeCombos = (unregisterCombos) => {
        return listener.unregister_many(unregisterCombos);
    }
    return { addCombo, removeCombos }
}