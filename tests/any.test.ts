describe('Any type', function() {
    it('should support any', function() {

        /**
         * Untuk type: any digunakan untuk typescript mengizinkan semua jenis
         * atau dinamis (tidak recomended)
         */
        const person: any = {
            id: 1,
            name: "aa",
            status: true
        }

        // console.log(person.status)
    });
});