import gsap from "gsap";

export function initTextRotator() {
    let currentIndex: number = 0;

    const textElement: HTMLElement | null = document.querySelector('.text-item');

    if (!textElement) {
        return;
    }

    function getTextsFromAttribute(element: HTMLElement | null): string[] {
        if (!element) return [];
        const textContent = element.getAttribute('data-texts');
        return textContent ? textContent.split(',') : [];
    }

    const texts: string[] = getTextsFromAttribute(textElement);

    if (textElement) {
        textElement.textContent = ''; // Metni boşalt
    }

    function typeWriterEffect(text: string): Promise<void> {
        return new Promise((resolve) => {
            let index = 0;
            const interval = setInterval(() => {
                const displayText = text.substr(0, index) + (index < text.length ? '_' : ''); // Metnin sonuna '_' ekle
                textElement!.textContent = displayText;
                index++;
                if (index > text.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        textElement!.textContent = text; // Yazmayı bitirdiğinde _'yi kaldır
                        resolve();
                    }, 500); // Yazma işlemi bittikten sonra yarım saniye bekle
                }
            }, 85);
        });
    }

    async function deleteText(): Promise<void> {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const length = textElement!.textContent!.length;
                textElement!.textContent = textElement!.textContent!.substr(0, length - 1);
                if (length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });
    }

    async function showNextText(): Promise<void> {
        if (document.hidden) return
        await deleteText();
        currentIndex = (currentIndex + 1) % texts.length;
        await typeWriterEffect(texts[currentIndex]);

        // Metni animasyonla göster
        gsap.to(textElement, { duration: 0.5, opacity: 1 });
    }

    showNextText();

    setInterval(showNextText, 2000);
}