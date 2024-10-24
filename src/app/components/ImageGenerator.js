export default class ImageGenerator {
    constructor(params, killfeedData) {
        this.params = params;
        this.killfeedData = killfeedData;
        this.generateImage = this.generateImage();
    }

    generateImage() {
        const { width, height, color, filename } = this.params;
        const { weapon } = this.killfeedData;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const weaponImage = new Image();
        weaponImage.src = weapon;

        weaponImage.onload = () => {
            const imgWidth = weaponImage.width;
            const imgHeight = weaponImage.height;
            const x = (canvas.width - imgWidth) / 2;
            const y = (canvas.height - imgHeight) / 2;

            ctx.drawImage(weaponImage, x, y);

            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 'image/png');
        };
    }
}
