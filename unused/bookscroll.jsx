const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
            clearTimeout(timeout); // Clear previous timeout

            timeout = setTimeout(() => {
                console.log("Scroll ended at scrollY:", window.scrollY);
                console.log(window.scrollY)
            }, 50); // Minimum time for new scroll
        }
