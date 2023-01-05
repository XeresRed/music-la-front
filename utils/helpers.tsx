
export const formatDate = (date: string) => {
    const newDate = new Date(date);
    const opts: any = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return newDate.toLocaleDateString('es-ES', opts);
}