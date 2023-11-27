import { format, isValid, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (date) => {
    const parsedDate = parseISO(date);

    if (!isValid(parsedDate)) {
        console.error("Fecha no válida:", date);
        return "Actualmente";
    }

    return format(parsedDate, 'MMMM yyyy',{locale:es});
}