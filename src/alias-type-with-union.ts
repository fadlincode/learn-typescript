export type ID = number | string;

export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price?: number; // jika menambahkan tanda  ?, artinya tidak wajib di isi
    category: Category;
}