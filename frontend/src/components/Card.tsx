import { PrimaryButton } from "./PrimaryButton"

export const Card = ()=>{
    return <div className="p-4  border w-64 mr-10 shadow-md">

        <img className="w-full h-56" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUVFhcXFxcWFxUYFxYVFRUXFhUYFRUYHSggGBolHRUYITMiJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGxAQGy0lHyYvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARUAtgMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABMEAACAQIDBQMFCwkGBgMBAAABAgMAEQQSIQUGMUFRE2FxByKBkbEUIzJCUmJygqHB0TNDU3OSorLS8BU0Y4PC4RYkVJOz8SU1oxf/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADgRAAICAgAEBAQFAwMDBQAAAAABAgMEEQUSITEGE0FRIjJhcRQVIzNCUoGRJDSxgqHBFiU1U2L/2gAMAwEAAhEDEQA/APcaACgAoAKACgAoAKACgCq29jCihVNmY8egHGsXjObLHq1F6bLGPXzy69jOHGy/pH/aP41yv4/J/rZoeTX7HIx836R/WfxpfzDI/rYeTX7Dse0px+cb02Ptp0OKZMHvnEePW/QmQ7dmHEK3osfs/Cr1XiC6PSSTIZYkfQs8FtxHOVhkJ4XOh7r9a28TjFN75X0ZWsx5Q6lsDWunsrhSgFABQAUAFABQAUAFABQAUAFABQAUAFABQAjNYXNNlJRW2BltoT9oxblwHhXnnE815N7l6LojTphyRITRCqGybYLCKRyDY52QpNhsMgoDY28QNOU2mLsud38ab9k5vYXQ9w4gnurseCcQdq8qb6rsUMmrlfMi+royoFABQAUAFABQAUAFABQAUAFABQAUAFABQB59v1v2sZXD4IJiZyxEiAs2VQNR5mpa9hblzqnmVwtrcZPSHRbT2kV+zNobRcXlwsEXd2shb02BCnuJvXJ5OHgV7Sm9l6ErGupYdtP+jj/bf+Ssxxo33ZJ1GMRjMUoOWCJj0MrqD9bszb01bx8TFsfWbQm2jP7R32xEBCy4IKTw99ex8H7PKfQTWlHgdE/lmQTyJQfVDf8A/RyLZsIbG/wZlJNu4pcemnPw9D+sSOXsmYfyi4cjz4J0t07J9DzADAkeAvUM/Dk/4zQ78UandzbmHxLK2HmD5SCV1WRQfN86NgGA77WqvjYWThZUXJdN9xZ2RnBo24ruUUQpQCgAoAKACgAoAKACgAoAKACgBueZUUs7BVAuWYgADqSdBQBmMRvxExy4JGxjXsWisIUP+JiG80fVzHuqvdk11L42OjFvsV+JhxWJBGKxHZxnjBhboLfJfEH3x/q5AawMvxBCO1WWYY/qx3Z2zIYFyQRJGvRQBfxPE+kmucyOJX3vq+hZjWo9iSVqi233HnJSjYgZKVSa7AM4jAI4KkCx4iwKnxU6GrlOfbV6iSipdzKbW3HQg9laMnuLpp80+cnoNu6t3F4ypLUyCeNFrcTGbS2LLh/ysZC8pVOaFu7ONVbubjW7TdXYtxZTnXOI5GQzLLFIIJUN8wNrHkyEcO8c+FqlbfqIpHq+7O/SMqpimCtbSbhG/e/6M/u944VNCzYNG3VgQCDcHUEcCD0qYQWgAoAKACgAoAKACgAoAKAMNvBv6RKcNs+H3TMLh21EMdjY5n4G2t9QNCLk6VDbfXWtyYqi5PoVz7AfFZX2lJ27DURAsuHVuP5PTtLcAW9R41zGdx9x3Gr/ACWo467sv40VQFUBVAsAAAAO4DQVzV2Xdc/iZaUUuwpNQCnN6UApACgBaAEoAWlFG5IQb6WvoeFiOjA6EeNWqMyyp9xHp9zJ7b3Fhku0VoX1tYZoiT1Tin1dO410WJxnm+GZVtxlLrExu0Njz4c2nVkUcHW7xtf5LjQeDZTW5XbCa3FlSdcokvBbfxGGjHuTFFVDWKEBlJ4+cj3yaC3m28asRkxqfQ1ex/KxLoJ8Jn5Z4Da5HRH0vw+NUimg2bTYu++CxLCNJckp4RSgxudL+aG0bT5JNOUkxTR04AoAKACgAoAKAMDvRvFJiJ2wOCYgJYYmccEv+ZjPNzz6DTTUrRzcuOPDbZJXW5Mf2VsuPDpljUDmeGrdWPM+zlYVwmbxCeRLv0L8K1FdCbWdoeJelAbmmVRmdlVerEAXPAXPM1LTRZa9QWxHJLuR02lAeE8R4n4a8AnaHnyQhvCrP5bk/wBDG+bH3El2rAt808S2BY3dRZQ2Uk3OgBBHoPSlXDcl/wAGJ5sRwY+HKG7WOzMEU5hYuVzBB1bLrbpSfl2RzOPK9h5sTmPacBIAniJYlRZ11ZQCwGvEBgfSKV8Lyf6GHnROoMdE4BSWNw3wSrA3uWUWtzurD6p6U2fD8iCblF9AVsW9EiqZKFIILSrp2FG3QEEEaHQjQgj5wOhFWqsyyvsxrSfcyW2dxIJCXivA/WPWM9zRHl9Eit/F42l0mQzxovqjIz7Fmwj55PyZBHaxkmO9vN7RTqOHMeBNblOVXcvhZWnTKJBwGEnxkpSKMudCxOiop5yNqEHQC5PQ1JfdXRDnseiOMXJ6R67unDi8IoSTEriI/kMHzIP8OViSwHRh4WrIr8RVc/K109yZ48tG4ikDC4NxXQ03QtjzQe0QNa7ndSiBQAUAVW82LeOB+yIErjJGSLgO3xiOYUXb6tV8nJhRDmkPhFyejNbD2SmFiWNATbUsdWdjqzu3NmOpNefcRzZZVre+hoQgorSJ96zx4l6AEJoAg7S2bFP2faqWEUglVbkDtF+CWA+Fa504a1fws+zE26/UjnWp9yug3QwSrlEVwbXzEMSVQICSRxtn16yP100P/UGV9Bn4eJL/ALChuxOc5ozGQSLFGcSODZRmzMLm97Z3tbMabLjuQ/YPw6FfYkZcOzykiSSVQxjIV5jdyt00PQ3uoNgbaU389vXVJbFVCGjuzhsuQKyIYhEVQgKwXNkZhYkuudiD1sSDlFnQ4/kpPehHjIkYfY0SSCUFyw184ggyWkHaHzR59pZBpZRnNgNKjyON33Vut+osaEnsnXrGJhb0ALelAAaAFvRoUi4zD5xYWudCCAVZToQw51cxsqdT3sN9NMb2VgIsPH2UC5UBJPVmPFmPEnl3AAUmXmW5EtzZHGCiTQ1UyQsdk4qzZSdG4dxro+A5/l2eTPs+xUvr/ki8rtimFABQBnNsYjNJ3JoPE6E1wnGs13XuEX0ReohqOyJesIshekEEvS6AS9ABelASgBRQAt6QBb0guxDSpCCUuhQvSaEDNS6ATNRoDl5OFOSAblluQq8xqei/iadGHqwHkAGlMfVgdU0AD24cafXPkkpL0Ea2jVYWXMit1Fem4lqtpjNeqMyS09DtWBozjZMsbMOSk+oVWypuFMpL2HRW2jIYk6jxHtrzZNy6vuzU0LDJcA9dfXTHHT0Bl9+N4pYDFhcKF90Yi5DvbLEi/Cc305E6iwCk610nAOE1ZClkX9YR9Pdla+1x+FFGkCZfO3kOe2uWaMLfuHacK2Xa09Rwenp0Ite8y5g2X7p1g2vOwjVUPYSq3AfCka5u7G5J77AWArMuz1i/uYqW/dEkYc3aRRbN2fipcfisJ/aeLVcOqFWzXZs4U+cL2+NWvk5eJTg15X4eO5ehFGM3Nx5i42nsufCYPFynHYmZxFeMs7L2ZDAkrY8Tpr0uOZrLxM/HzsyquNMYrfUknCUIN7KvDbSmMmxgZ5bTozTXkf3wizAvrrqfVpwrTsw6eTLUYLcWkuhEpvcepsP+KMD/ANbh7H/GQeog1ydXB87nT8p66ehad0Pcz/k922fcM+IxMzuscsl3dmYhFRCAtz36AcSa2ePcO5syqimGm0t9PUips1ByZHwG+EoxMU0wYYLHKqxFlsIJUOUqW5gm5zcwQfikVYyeBVPFlXV+7X1f1Q2F7UtvszX7fwjSQOqzSQsPOzxGzjJckDUcQLa1zfCrY1ZK8yClvpplm1Nw6Mxu7ey5sZh1xCbUxyKxYBWK3GU5eTd1dTxLPxsG7yZY8WyrXXKcd8wm2E2hs0DEri3xmHUjto5R5yqSBdTc9bXHAkXBFR4tnD+LbodfJP8AjoWasq672jb4fFLIiyIbq6q6nqrAMPsNchkUSptlXLunouRltbCWTzgOov8AbTYx2ti7FwxvduvsGgos6dBESAaiFAmgBA9GkKaPYEl4h3Ej7/vru+BT5sVfQzr1qZZVtEJF2n+Se/yT7KpcQesaf2H1/MjJPr/XSvOq+jRqDGyJc0S9RofEaU7IjqwQxvlGwhTEYfHGIzQRK0WIQX0jYtcm3Kzt3aC/Guv8N5UZYtmLzcs31iUsiPxKWuhzDid3mAa2HF+TJIpHiLUs6vEEXpNsVPHL7dzamzQewwTx3di2SJX1OUZmOmgso1OmlZHEsPic4+bl9l7ktU6k9RK3d3/7naX0IP4I6v8AEl/7LR9//JHX+9Iud+h/8div1Le0VleHv/ka/uS3/tswyQB32CjXIaJwQCRcaaXBBt7a7Kdkq45so90ymurgegLulgf+iw3/AGY/wriK+N5vMv1H3Lrpr12POdibD90uNnxsThIJDLi5FPmyzmw7KM/JXLlB7mbpXbZ2csSr8ZZ+5Jajv0XuUoQ53yLsajank6hnLF8TidfgrmTsksMqBYwlgqjQAcudYWN4rsqa/Tj9X7k8sVP1Gt09tSZJsBi9MTh43AJ/PRBTlYE8SBbXmCDxvUvEOHwldVm4y+CTW/oxIWNJwl3K7yd7zYSDARxy4hEcNJdTmuAXJHAdKseIeEZeTluyqG1pCY9sIw02G+O9cWKiODwZM8s5VPNVsqrmViSSB08BqTwpvBeD24V34rK+GMd+vcW65TXLE12ycN2MEUN7mKNEJ6lVAJ8L1zGfd+IyJ2r1ZZrjyxSO52vKR0jX1uW+4H10yMdVJjiaptYVVfXqKK8tr93to5WAdpSaAWPWk0KaHdxxlZehB9Y/2rr/AA5ZuuUPqUspfEXNdKVSFtn8i/h94rO4q9Yk/sSVfOjIsK8+j6GoyJspsskkfI+ev31YyI7gpDEWJqrGTi9x7jtehXPsHCMbthcOSeJMUdz+7V5cVzEtKyX+SPyoexIwOyYIiWigijYixKRopIuDa6jhoKiuzsm6PLZNtfUWNcV1SHYdnQrI0qRRrI98zqih2ubnMwFzqB6qjnlX2QVUpPlXZAopPY7iMMkilJEV0PFWAZTY3FwdDqKjqssqnz1vTQskn0ZHGx8P5h9zxe9fk/e097sc3maebrrpzqf8flPmXO+vcb5cenQnEXuCNPuqonKL2u44i4PZ8MIIhhjiB4iNFQEjhcKBep7sq6/Xmyb0EYqPYdYmouVildiNmwu/aNDGz2tnKKWtYrbMRe1iR6au15mRCHlwk9L0EcI72yF/YOE/6TD/APaj/Cp/zbN/+yX+RvlQ9h+DAxRgiKNIwfkIq/wiobMy+79ybf3HKEY9kcl72PMGx8aa4gcB74lh1jjPqZxUsl+gvuJvqSxMAGc8L2A6m9lAqvycz0hxwtycp4g3c/O5L6KfJcq2BKqsB0h0JpBS33Zf3xvo/fXR+HJatkvoVcrsmaSuwKRA25+RPiv8QrI429YkiWj50ZDaII4VwtXU0ilweI9+UX1GYfVINx6ND660pR/SYz1NEayB4KaUCr3rxWTCyAOEaTLCrk2CNMwjzk8goYt9WtXguOrsuO1tLqyK56h0KybaZl2NJKHu4wsis6n85ErIzKw+cpII61ceNGriyhro3tL6Mi591HW/M8a+5TM8qQ9pKZDCZQ2VcPIw/JedYMFPQWudKscGrcrLuWKb+v3EufRCyyTJgMJNOxEsMmGeYlrHKXEcnaEaGySXN9LremVQqnxC2mC6STS+4r2q1Jlfu7tGSWaOFntbETYsDMSThZI88APPLmxAHT3u1XuJYtVFErkl8qj/ANS7jK5Ny1/cm4zbJG1I07VezA9ztHmGYyzI04fLfgMkS3t8eqVPD1LhUpcvxP4t/RD5W/q69Dna8cvutYULdli8jucxBj9zEGYL+sUxrpb4xowbKXhO2a+KvaX132/wE1LzNL1Gd7FKzxySic4cKBmgkK9jKZR58iAjMpBUc7WOlP4VKM8ecI653t6a7r6BdtSTfY0p41zkl1ZZG5CaRAV8jWe3J9PBvin7vTVyC3HQgw8mXEwH5ccqH6SWdfszVPCHPjzXs9jfUnSPa1uKnKgPOU/CbwXh436VCoqMdv1/4FJeGhygD+iTxJqnZPmY4dYVGAshsoHU0IUnbCe0yd9x9hrW4LZy5S+pDkL4DXV3ZnFZt57IB1YfZc1heILOXF17snx1uZlMcdK4yruaBmcRbtkcea8bjtF+XGdGYdSAfSK26vkcZdmhj7mtQ3A8KwZrUmPAcaRgRsbgkkZC4J7NiyjTKWKNH5wI1GV2076t42XOhSUOm+mxsoKXcjnYsXZTwgERz5y6ggAdoAHyWHmg2v4k1M+JWythbLrKP/f7ieVHTXuSMVgkkaNnBJizFRyPaRtEwYcxlcimUZ1tPNyfy7/52Eq1LQ0NlR+5vchzGIxmPVrtkIsBm7hoD3CledYslZC0pB5a5eU6w+y4kl7ZVs/ZLDx07OMkqLddePcKLuIXXVeVLtvm/uCqSexifYcLKQy3LTCbPpnEgdXBVraAZFFugtU0OLZEWtPolrXoJ5MWSZ8IrSJKb5ow4Wx0tJlzXHP4IqrDKnGuVS7SHOO2mQdp7HjmcO5k0CgosjLG+Ri69og0axNWcXiNmPW4RS++uo2dSk+pNc1R3t9SQaLX0Pop6QhW41bgjn7O+rNT0xCJLIZJMGw0PujXxySJIPtvWhTFQhaveJG+5fQKCS3xV81e+3E+JOtZNs3rRJolhevGqw4UCkAblN3tyT2mnpaiBJwDWkQ/OHtqxgy5ciD+pHatxZtBXo6Mwpd4W1QeJ+4Vy3iWz4YQLWKurZn8SNDeuWh3LpltuQC1mOX5Eg+Ieh+b3VtYlnoxjLfdbHNJEVkFpYmCv0NxdHXqrAE36gjlVfieMq5Kce0hYy30LZeNZjHCMdaEBhd799pMHieyWJZFKB7s8ikZncWFja1lHKu74P4fqzsZWyemUbshwnpFZH5VT8bCt9WdD9jwn21fn4Ng/lkRrMZLj8qsPxsPP+1CfYFqtLwXL+pDlmj6eVPDc4sQP8uM2/8A2FQS8GW+jQ5ZqJGG8ouEdlQNICxCi8B4sbC5EvfVezwldXFzfZDllxb0a4E2F7X524eiuUtgoWNItx69Thqj0KcE0qAYkFSRYhEnGbT43t7qsQYjKvZ0wGICniMzr3OI2UjxIIP1a0Jb8ltDH3NThY9B80WHj8Y+usW19SUfqJAIzZQW6e3lSxW2BxAlhrx4nxpZy2wHyLajlrRCTjNNegNbTRsoHuoPUA+sV6ZRLmrjL6GS+5ntuv76deAA+/764vj8+bK5fZF7GXw7KebUGseK0WCj2iRYhhmB4g1fobT2hrRnYdrvgJM6gyYdyEeM6Oo1KtG55i50OhueFdDi4MeJQdb+Zdipfb5LUjebLx0U6CWBw6HmOKn5LqdVbuNczm4F2LPktWi1VbGxbTHW41TSJGeO+VRW925srZexQXsbfCc8eHOvWfDFlVeGoykkzIyU3MxglHWulU4PtJFbTOgwqQadCgcSNkf3mD9dF/5FqpnP/Tz+zHQ+ZH0IDoD1rxHJ/dZuR7HLGoRxw1KhBtqcu4EaaO/tv07yeVWqoSm9JbGy0urMFtLeyIY3DiEhyJlEsgPvbIxyEL1IDHzuGnOupo4XNY8nZ7FSV/xJI9Pwp80Vxdq1Jourqhy9RijUzXYLyXU+J4VIlyx2IPA1EB3ntSNAarY8maFD3W9Rt91eicLnz4sH9DMtWpMzeOf3x7/KbX06VxXENyyZ79zQpX6aK6Zx19dVYxZIV2KZeZHrq1WnsRmI2jsybEzLEsiXd7ICbKBxJNuNgDXU8MzK8T9Rrsink1ebDRt93N04MGQyF3lIs0hZlB7hEpy2+lmNY3FuP3Z3wtLl9B+PiRr6lw/GsFFtoRR4jjwJGp1OgNWI5NsVpSGuEWN4jDo3wlB+lZv4r1ZhxLIX8hjph7FfJu7hG1bDQE9TDBp4kID9tWYcZy10jJjXRX7HnPlGGDiZYMPh4klvnkdAVKoR5iZb2zMDnOmgKjjevQfD6yrI+bdJ6My/lT0iF5O9he6MT2rD3uAq2t7NKdYx3gWLkdEt8apfEHEI41PJ6sMetzls9iB0A6evTTWvJZy5pNs2EtIQ00U4alS2wMpvXvZJhGCDBsc3wJJHAjbrlyXue4kHurquFcCqy0m7F9ilfkuHTR53t3eXFYoFZZLJx7OMZI796jVvrE12WLwnGxl8EepnSyJT7mZmqfIjtCwZ9GbtT58NA+bNmijJbqxQFj+1evJ+JR5MiS+ps1PcEWLvlu3Th3nlVGK2yQbw6WGvE6nxNPnLfQB9VvUQBIR1pdNgaXd2a8VvksR6/O++u34FZzY3K/QzshansNo7IznMrZSeI5Hv7jSZ/BoZEvMi9SCq9w6GdxexZx+azd6kH8DWLPg+VDstlqORB9ynxWxZzwgk9R/GnV4GUv4iu6HuRMFujje3ikEOVUdWJeRfgg+cAASb2vyrRWFd5UlJehH58DSX1rj5R02i4NtxoQC2pQOGpQKreba64XDvKwByjRT8Z2JEaEdCQSfmo9bnA8CWVkJa6FXJs5EeEYjEM7NJIxZ3YszHizE3JPeTXr1cIU18q6JGQ+rPbd0dj+5cKkZ0exaTvlexf1WVP8rvryfxBnvIyX16I1sWvlgXANc+WtATQA2TSoQYx2GjmjaKVA8b/CU9eTKfisOIIq5iZdmNNTgxtlamup4rvPsZsJO0THMvwo3+XGeB7mHAjkQa9S4dnrMoVi7+ph3VOuWjPT1YvXQIHuPkxxZfZ0OZl8wvHYEXsrEjMORs1eZ8fq5cptepq4z3A1DkE3PAcOnrNYqi/QsiiU8h/XpsKXy16gLYnifv9lh7aHyoBARewJJ6Dj3eatPhXZP5IjXJLuzRbu4Z1zEoUBtxFrkd3prp+D4mRVzOa1spZE4y7F7XRlYKACgBDSMDGYhLSMOjH215tmQcL5xfubFT3BMZNV0PFFLoBomnJbegZ5L5UdsGSdYFJywjOw4e+yKCAfox5B3EvXqnhfBVFHmPuzFyrOaWio3G2f2+NiUi6xkysOoj1UHuLlF+tWnxvJWPhyl7kVMHKej26QW0ve3PqeZ9J19NeN2T55ORuxWloavTBRTQByaBBpzUiFMj5ScAJMJ2oHnwMG/y3IRx4XKt6K6jw1l+XkeU+0ilm17js8hmGtd5amzMgeneRvaEYjngZgrZ1lUFrZlK5HtryIX11xXibGn8NkUaGJL0PRfdcV8qspboCCfXXIuqxdWXi02VsxpwWzBVBy8CzXFvQOPfWrgcJ/Ex53LoV7b+R6LqHd+EfCzP9I6fsrYV0FHCMav02/qVZXzkWUECoLIqqPmgD2VowrhDpFaIm2x2pBAoAKACgAoAym2VtOe+x+yuC43Xy5UvqaeK/gK81mJdCwBoFImPxCxxs7/BVSzfQUF3HpVWFXuHU+bkRiRXT5Ytnz3i8U0sjyubvI7Ox+c5zH217Xj1KqqMF6GDKW3s9E8kGD1nm70jHgAXf94xVxnjHJ1CNSL2DDbbPRZBXnSNTQw1O0GgpdAITRoBs0qDRW7eiz4bEL1gl+xCR9oFaXDJcuVBr3Ibo7gzwhhzr1hroYiNR5OsPeeVzwWK3pd1/A1zXiGfLWkXMVfEelbGjtJm7ifV/wC64i+W46NLR6JuYfeW/WH+Fa6Pga/0/wDcz8n5zQVtFcKACgAoAKACgAoAzW8SWlU9V9hP41x/iGGroy90aGG/haKgGufLa6imlFMj5TMZkwMgBsXyR/tuCf3Y3HprqPCuP5mWm/Qp5stQPGK9W1oxtHs3kywwTARm1mcu578zlR+7GvrryvxVfz5bXsbGFHUDUvXLaLow9OQHNKAlAhwxp2gK7b8mXC4hukEp/cI++tDhkebKgvqRXPVbPC5F0r1lmCmb/wAmmC95mkt8KQKO8It/a9cT4lt1bGBp4cejZusGlrnut67Vyc5bL5u9y1/5e/V2+4fdXV8FWsff1M3J+cv61yuFABQAUAFABQAUAUu8kYyo3MEj0EX+6ud8Q1p1Rl9S5hv49GcvXJJGhoTNSgeeeV/EDsoE6yMf2Ixb/wA1d74Or6ykZue+yPMGOld/vSM0983Zg7PCQIeIijHpEa3+29eNcZsc8uTN3GjqBZt6ayycYegBsmnAJegDkmlEKTfOTLgcSb8Ywv7bqv31scChzZsCvlPVbPGmcCvUWYSR6zuXAUwUK2tmDSH/ADGLD93KPRXmnG7/ADMuTNzFjqsvr2061ilk3m5w/wCWH0m9tddwb/bL+5mZP7heVrFcKACgAoAKACgAoAqt4196v0YfbcffWJx2Dljb9mWcV6sMsK41djUClA8t8sDe+4cX+LIfWYx/or0fwfFeVJmTnfMjz/Lm0HMgDxOldddJKuTfsyjFdT6KiWwAHK49RNeLZsue+T+p0Fa+FHRqrokGzRoBtxSiDRelAS9KBlfKRiMuCK/pJY19V3/010nhmrmy+b2Kea9VnlkWFMjqi8XZVHixCj7TXf3zUK5TfomZEOr0e+JhhGoReCgKPBQFHsryK+3zLHL6nQwWopDAYZiL93qpGnocb/dH+7/Xf211vBv9qv7mXlfuF3WqVwoAKACgAoAKACgCFtpbwSfRv6tao8RipY09+xJU9TRjb1wKNkKEBExOBjf4aq30kjb1Z1NuHCr9OddTHUHojlVGXdED/h3C3v7nguDe/YQXv6EFWvznJ5dOQz8PD2LNfG/eeJPM1lzlzNsmS0dE00UbY0AAF6UBmWGgQjO9qekBhvKbibpBEObPIfqqFH8RrsvC1L3OZmcQnpJFTuDs7Pjob8EzSt4Ri6/vFK3eOX+ThSfv0KWGue3R6jjcQF4mwrzGutzOgZFgkzNmy5Ra+vQcKmnDlWtgekbqLbCp3lifHO1dbwtaxomTkP8AUZb1okIUAFABQAUAFABQBTb04vJCBzkdU9BNz9gt6azOK2cuO4+/Qnx47meevvfgRI0bYlVdGZGDLIAGUlSM2W3Ecb1gLgGa4KcY9H1L7yq962XLSqFzl1CWBzlgEsfgnOTaxv8AbWYsa3zfLUfi9iXnjrezkm9uGtrG+hB4EHhrR5U98qXUdtJbZyOlN5X2F+orKRxBHjSOLXdBr2Eo0IcPS6YDayWpAH0lBpdC6O2VT0pBDzLylzg4tYwRaKFRp8p2Zz9hWvRvC1XLiOT9WYHEnuzRI8nKBRiZzyCRL6fPf2JVXxZbzKFK+5LwyvvM0KjMe0flwHIf71yLlyrlibJORSAo5sbn7qgb2B6VsGPLh4h8wH16/fXbYEeXHivoY9r3Nk+rZGFABQAUAFABQAUjAxW/OI9+gToQfSWH4Vz3Fp7ujAv4kejZ5/uXsjD4lMUZ4I5C+OnGZl89VIT4L8V1YmrnFeI34tlKrl05UMopjOMmyjmnb+wsTCST2OL7BSfkCRHA9d60IUqfFIWJfNDf/Yh3+i17MsN+t5sHNs+SLDzq7HsgEyuDlRgTxHLKKqcM4Xk15srrY9OpLdfGVSiu5YbxPLNiodmwytDGIRLPImj9mBZUW3cBpzLi/DWDFhVj02ZlkdvmaSHWOU5qtFfjMG+ypYJop5ZMNLIIpo5mzWLahgQLcASDYG621BqSi+ri1NkJQSkltaGzhLHmnvoJvFvDJhdrqC7+51WJZVuezAkUguV4AgsGv82pMLhdV/C5bXx9df2EsucLvoXW0sZINqYbDh2EZhkeRAfNcjtMpI5/BX1CsunFguG2TkviT0WJyfnpLtoi7t7SllxOPV5C0cU2SJTayefJcCw6KKTi2NVTi0yiurXUMecpWS2XbtasDRcGO1Ymwp6imB5VvFJ2mLxEhOgkZb90fvY/hr1ThVPk4sE/bZzOVYpWNG73ZweTDRqRbjIwPy311+iuVfRXD8ayvOyZSRtYdXJWi8gjzNY8F85vE/BH31jy6R+5aHIpLln5cBUUo60gPUNni0Uf0F/hFd3j/tR+xiz+ZkipxoUAFABQAUAFABQBgt5xmnL/ACGX9217VxvELt5bfojWxo/pGA2Wu0cH2qx4FZ1eeSZHEyaF7WzLfh5o6Vs3SwctwnOzTil0+xBBW1bSW9kbbGx5MPsgxuM00mJSaXKL2dzqNONgoueGtT43EKruIOUXqMYtL/BHKpxq692yd5U9nQpgyyQxI5mjUMqIrWIfTMBwNqh4Jm2zyrIzltaY/IrioJpHe3J1wu1o8RL5sM8BgMnJJFI+FbgNE9BJ5GjHreZw6dEPmUm9CTfl3KT7aIm++0IsUcNgsM6yySYhHJjIZUVQw1YaXsxbuC07gmHZh1W33LXRrqGTbGxxhHqSMXgExW0dpQtbLJhYVB+S1oyjehgD4Xp9WW8fCqsX9X/Ikq+eyS+hSbn7ReXaEKzAiTDYWTDtc3JMbMtz32a31aucWphDBcq+0pJkeNJ+bp+iJ+5mKUNjm+Xi29QLn/VWTx1OVdMV6RRYxF8Un9TR9urcDXOcjReH2YQxSTtwjjZ/2VJH2gVNiVu3JhWvVkd0+WDZ5PsDBHEYhIjcqvnynqF1sT85rD0mvRuL5axcblXtowMSnzLOZnqMa8ABcngOp/DnXmzbk22dFrXQ6cBvelJK3u7D47cbX6fhT1Pl+JgSY1AOUDQa+JPGq0pb6io9I2NJmgiPzF9lq7rDlumL+hiWrU2TasjAoAKACgAoAKAENI+wHnOKxYDtnGmZtfSa4C5N3S+5uV/IjqIKRdCCO6oeVruSIdVSOFxSKTXYboizorXDKrC/BlDC/gdKkrsnW9xYOKfcaxuHjlQxzIsiNxVhcXHA9QeOo1qWjKuolz1vTGzhGa1JFdsvY+Gw1zh4VRmFi12Zsp4qGYkgcNB0q1k8TycmPLZLoMhRCD2kBwsaTSTqD2sqqrnNdSqWC2Xl8EUyWXZZTGh9kKqkpuS9Spj2Snut8WuYSOLMNMhvlBIFr3OUc+tXJcTnLHVMuyI1jxU+dEvYW7UcIcAs/aSGQ5raEixAtyqvm8Rlfy/RaH1U+Xv6l9Hs1Ab5RWe7ZMl0Zjyn7WEeFEKmzTuAf1cdnf0Zsg9ddJ4YxXPIdsvRFDiE9QUUQ9x9j9jh1Yi82J8+3MJ+bHqOY/So49mO+9xXyodhV8sdv1NLO3ZjIpvI3E/JHMCsGPXr6F07w8YRCeQ4d9Mm3JgO4UaX5nX11HPvoD0Hd1r4aLuW3qJH3V2/D3vGh9jGvWrGWVXSIKACgAoAKACgApGB59tbDZZHX5x+3X764XNh5eRKP1NmiXNBFS+Csbqcp6jT12qLzfcmOTjpF0Pne2jljLsIOwYtW0vY9DxprrcQHpTemARWQ05MBloiacpJASsNhaZKXsKS8RMkS55GCgdaK65WPSDZn5dtyznLh1yKeDMNT4L+NaFeLCv53t+wxy9TCwbMbaW0MhkZoY7ku36KMgMR3ux0+kOldbYo8Pwefs5GS5eddr0PQyY8OpSK5Y6FmN2I+SD8VdOArjbLZ5D2+iNdRSWgwcbNqVt06m9RWaS0hSXJqwUcF4+NRrogHo0sLVG2Kbrdj+7J9b+Nq7Xhf+1iY+R+4y1rRIAoAKACgAoAKAChgeS7P2q0uM2hC586PEs6fq7iIj0FAfr1g+IsLljXfH17l3At23AtVFxXLmkMTQXpU9CEGbCCpYzYDaTsujajkfxpXFS7ASUxK8zUfKwH4BmOmvhTX0Ai7S2ykRyRjtJegOi97NwFWacRyXNPogK2PZkkzZ5zmPT4q9yipZZEa1y1CaHt8Npe5cGVUhXmvGh0uq299cHuXQd7CtHgGE8rK55do9WUs+/yoaXdlburhfc2Gvb37EWYj5EY/JJ1GhzEdW7qn4/mficjkXyxE4dj+XDmfdlzg8FrmfU1z8rPRGgT5myL3nQVH3Yg3hYrDv5+NDYDgbj40xim53Z/uyfW/jau14V/tYmNkfuMta0SEKACgAoAKACgBDSPsB4ptyP3LteLEDSPFs0b9A7HIwPiTG/oNZ8LvxuBbS/mg9knI6b4zXZmqZLGuJNxCEUoDJipdhoabCX0KmhS0Ghr+zI1859B3m/qFP8AMk+iAr8btFn95woyj4z93j1qzXWoLnsGsk7K2OqDhqdSeZPUmorciU/sKkXUUXAVX7vQr6I822hN/aG0T8bD4fze4ojHT/Mkv9Ve6u7hrhfDf/1MxVF5ORv0RssLhiTnbVjXFWWOT2bC6FgBaowIR8978hwo2A+TYUCiKPbTQN3u3/d4/T/Ea7bhb/00TGyP3GWdaBCFABQAUAFABQAhpH2A8v3s2X7ohkQD3xH7WI9JY2LAfWF1+tXIYmX+Gy57fSW0zVtq56olm8gJNZdmud67bLUN8vUQCmDjlh6KAIsxm5Wp616gQpNmyOfPbToKkVij2EZYYXZ6oLACo5Tcu4aJJYCmilJvftQwYSWRb5yBHGBx7SU5BlHMgEkeFaXCcZXZUeb5V1ZWyrOWt+5C3U3f9zQKjDzz58n07WCj5qgAeNzzqxxjiH4q98vyrohuLT5UPqzQhbVjlgYnegDiIWFAAzXoHHUZprFNlunLeIr8lvbrXWcEs5qHH2Zk5kdWbLytoqBQAUAFABQAUAIaR9gMHjTdntzZres15/k686X3N2r5ERWi76iHaGiSDQB2uK60aA791Cl0GwOLFGg2NGcmlFR0g5mmCkfE4ZHeJnFxC5kUcu0ylUJ+jcnxt0q5j5LphJR7yIba/MafsSTOKrEg273oEGr60Ad0AcqKQeCU1jTT7nyec45FQfUT+NdDwGXxSiUc5dmamumM4KACgAoAKACgBvEHzW8D7KjteoN/QWPdGB7S3Eer/f8A3rz59WzfXRAXX/3SCnDWNAHBiFLsRnBw9KIdDDUgDiw2o2KhJL8hSAxgxE8aBp0ILU4BGQ0AIIqAFyUg7QvZ0vUU4LKDxH9d1HI2Bebp4gGawvYo3tB/Gtngnw3te6KOcvgRshXVmYFABQAUAFABQBy63BHWmySktMDOYvd1gSYmBHJWuD+1reueyeB7bdT/ALF+vNaWpIrJtlSr8KEn6IDfapvWZPheTD+OyzHLrZDmiCmzqyn5wIP21VlRbB6cWSq2D7M5CDkahaafVD9pi9metGw0LlPX+vVQAhL9RQgRyZH+b9n81O0gOTJJ837P5qPhGnDPJ837P5qd8Ipx751X7PxpVyiMTI/yh/Xoo3EDlkPOT+vRajmXsKNsq83J/rvvSpyfRIXa9SThMGz/AJKJ37wDl9ei1PDFyLH8MSKV9cfU1O72xZI37SSy2BAUG/HS5I0HhrW7w3hs6Z+ZZ3KGRkKxcqNJW4UwoAKACgAoAKACgAoASgAtSOKfcCNNgIn1aJGPUqL+u1RSx6pd4ocpyXZkZ9gYc/mwPAsPYary4djy/ih6vsXqMvu3ByDjwdvvvUUuEYz9B6yrF6jbbsxcnkHpU+1ailwXH9Njvxlhwd1k/Syfufy0z8jp92L+NmJ/won6aT9z+Wj8ip92L+NmId00/TS/ufy0fkVPuxPxsxBujFzlmPpQf6acuDUL3EeZYOpunhuYdvGRh/CRUy4RjL0GPKsfqPx7tYUfmVP0ize01NHh+Ov4oa75+5Ng2fEmqRIv0VUewVYjRXHskMc5PuyTapNDRaAClAKACgD/2Q=="></img>
        <div className="mt-5 flex flex-col items-center">
            <h3 className=" text-xl ">Dhoni tshirt</h3>
            <h5 className="text-sm text-slate-500 leading-tight mb-2">this the tshirt of ms dhoni who is captain of csk</h5>
            <PrimaryButton onClick={()=>{
                console.log('clicked')
            }}> BUY NOW</PrimaryButton>
        </div>
    </div>
}