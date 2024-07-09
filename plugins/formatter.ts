export const formatRupiah = (number : number) => {
    const parts = number.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedNumber = parts.length > 1 ? `${integerPart},${parts[1]}` : integerPart;
    return `Rp ${formattedNumber}`;
  }