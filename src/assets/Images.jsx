const Images = {
    logo: new URL('./logo.svg', import.meta.url).href,
    banner: new URL('./banner.png', import.meta.url).href,
    clients: {
        client1: new URL('./Clients/client1.svg', import.meta.url).href,
        client2: new URL('./Clients/client2.svg', import.meta.url).href,
        client3: new URL('./Clients/client3.svg', import.meta.url).href,
        client4: new URL('./Clients/client4.svg', import.meta.url).href,
        client5: new URL('./Clients/client5.svg', import.meta.url).href,
        client6: new URL('./Clients/client6.svg', import.meta.url).href,
        client7: new URL('./Clients/client7.svg', import.meta.url).href,
    },
    community: {
        icon1: new URL('./community-card/icon1.svg', import.meta.url).href,
        icon2: new URL('./community-card/icon2.svg', import.meta.url).href,
        icon3: new URL('./community-card/icon3.svg', import.meta.url).href,
    },
    unseen: new URL('./unseen.png', import.meta.url).href,
    help: {
        icon1: new URL('./helping/icon1.png', import.meta.url).href,
        icon2: new URL('./helping/icon2.png', import.meta.url).href,
        icon3: new URL('./helping/icon3.png', import.meta.url).href,
        icon4: new URL('./helping/icon4.png', import.meta.url).href,
    }

}

export default Images
