let index=0;    
let isOnMenu=false;
const array = [
    "Sconto per studenti disponibile ora con Unidays.",
    "Fino al 10% di sconto su dispositivi audio o wearables, 40% di sconto su accessori smartphone con l'acquisto di un Phone(2a)Plus.",
];

function gestMobile()
 {
    let menu = document.querySelector("#mobileMenu");
    let sezione = document.querySelector("#allSection");
    if (menu.style.display === "flex") 
    {
        menu.style.display = "none";     
        sezione.style.display = "block";   
    } 
    else 
    {
        menu.style.display = "flex";
        sezione.style.display = "none";
    }
};

function textchange(direzione)
{
    elem = document.querySelector("#messaggio");
    new_add = document.createElement('a');
    if(direzione==="prev")
    {
        if(index!=0)
        {
            index--;
        }
        else
        {
            index=1;
        }

    }
    else
    {
        if(index!=1)
        {
           index++;
        }
        else
        {
            index=0;
        }

    }
    elem.textContent = array[index];
    if(index===0)
    {
        new_add.textContent="Per saperne di più.";
        new_add.href="https://it.nothing.tech/pages/student-program";
    }
    else if (index===1)
    {
        new_add.textContent="Scopri di più.";
        new_add.href="https://it.nothing.tech/products/phone-2a-plus";
    }
    elem.appendChild(new_add);
}

function apriMenu(type)
{
    let menu = document.querySelector("#sotto");
    let sottomenu;
    if(type==="tel")
    {
        sottomenu = document.querySelector("#Telefono");
        document.querySelector("#Audio").style.display="none";
        document.querySelector("#CMF").style.display="none";
    }
    else if(type==="audio")
    {
        sottomenu = document.querySelector("#Audio");
        document.querySelector("#Telefono").style.display="none";
        document.querySelector("#CMF").style.display="none";
    }
    else if(type==="CMF")
    {
        sottomenu = document.querySelector("#CMF");
        document.querySelector("#Audio").style.display="none";
        document.querySelector("#Telefono").style.display="none";
    }
    menu.style.display="flex";
    sottomenu.style.display="flex";
    
}
function gestMenu(type)
{
    let menu = document.querySelector("#sotto");
    
    if(menu.style.display="flex" && isOnMenu==false)
    {
        menu.style.display="none";
        document.querySelector("#Telefono").style.display="none";
        document.querySelector("#Audio").style.display="none";
        document.querySelector("#CMF").style.display="none";
    }
}
function sottoMenuEnter()
{
    let menu = document.querySelector("#sotto");
    isOnMenu=true;
}
function sottoMenuExit()
{
    let menu = document.querySelector("#sotto");
    isOnMenu=false;
    menu.style.display="none";
    document.querySelector("#Telefono").style.display="none";
    document.querySelector("#Audio").style.display="none";
    document.querySelector("#CMF").style.display="none";
}

function chiudiCarrello()
{
    let spazio = document.querySelector('#spazioCarrello');
    spazio.classList.remove("aperto");
    setTimeout(() => spazio.style.display="none",100)
    document.body.classList.remove("no-scroll");
}
function apriCarrello()
{
    let spazio = document.querySelector('#spazioCarrello');
    spazio.style.display="flex";
    setTimeout(() => spazio.classList.add("aperto"),1)
    document.body.classList.add("no-scroll");
}
function mostraInformativa()
{
    document.querySelector("#informativa").style.display="flex";
}

function apriPrimiSottoMenu(type,extra)
{
    let menu = document.querySelectorAll(type);
    let chiudi = document.querySelectorAll(extra);
    for(let i=0;i<menu.length;i++)
    {
        if(menu[i].style.display=="flex")
        {
            for(let j=0;j<chiudi.length;j++)
                {
                    chiudi[j].style.display="none";
                } 
            menu[i].style.display="none";  
        }
        else
        {
            menu[i].style.display="flex";  
        }
    }
}

function gestTendine(type)
{
    let menu = document.querySelectorAll(type);
    for(let i=0;i<menu.length;i++)
        {
            if(menu[i].style.display=="flex")
            {
                menu[i].style.display="none";  
            }
            else
            {
                menu[i].style.display="flex";  
            }
        }
}

document.querySelector("#menuIcon").addEventListener("click", gestMobile);
document.querySelector("#prev").addEventListener("click", () => textchange("prev"));
document.querySelector("#next").addEventListener("click", () => textchange("next"));

/* GESITONE PER NAV "TELEFONO" */
document.querySelector("#tel").addEventListener("mouseenter",() => apriMenu("tel"));
document.querySelector("#soloLink").addEventListener("mouseleave", () => setTimeout(() => gestMenu(),200));
document.querySelector("#sotto").addEventListener("mouseenter", () => sottoMenuEnter());
document.querySelector("#sotto").addEventListener("mouseleave", () => sottoMenuExit());

/* GESITONE PER NAV "AUDIO" */
document.querySelector("#aux").addEventListener("mouseenter",() => apriMenu("audio"));
document.querySelector("#soloLink").addEventListener("mouseleave", () => setTimeout(() => gestMenu(),200));
document.querySelector("#sotto").addEventListener("mouseenter", () => sottoMenuEnter());
document.querySelector("#sotto").addEventListener("mouseleave", () => sottoMenuExit());

/* GESITONE PER NAV "CMF" */
document.querySelector("#CMFs").addEventListener("mouseenter",() => apriMenu("CMF"));
document.querySelector("#soloLink").addEventListener("mouseleave", () => setTimeout(() => gestMenu(),200));
document.querySelector("#sotto").addEventListener("mouseenter", () => sottoMenuEnter());
document.querySelector("#sotto").addEventListener("mouseleave", () => sottoMenuExit());

document.querySelector("#bottoneCHIUSO").addEventListener("click", () => chiudiCarrello());
document.querySelector("#carrelloIMG").addEventListener("click", () => apriCarrello());

document.querySelector("#bottoneEmail").addEventListener("click", () => mostraInformativa());

document.querySelector('#mobileMenu [data-index="0"]').addEventListener("click",() => apriPrimiSottoMenu("#tendaTelefoni",".tenda"));
document.querySelector('#mobileMenu [data-index="1"]').addEventListener("click",() => apriPrimiSottoMenu("#tendaAuricolari",".tenda"));
document.querySelector('#mobileMenu [data-index="2"]').addEventListener("click",() => apriPrimiSottoMenu("#tendaCMF",".tenda"));

document.querySelector('#mobileMenu [data-index="00"]').addEventListener("click",() => gestTendine("#tendaTELEFONO"));
document.querySelector('#mobileMenu [data-index="000"]').addEventListener("click",() => gestTendine("#tendaACCESSORIO"));
document.querySelector('#mobileMenu [data-index="11"]').addEventListener("click",() => gestTendine("#tendaAURICOLARE"));

document.querySelector('#mobileMenu [data-index="22"]').addEventListener("click",() => gestTendine("#tendaREPEATTEL"));
document.querySelector('#mobileMenu [data-index="222"]').addEventListener("click",() => gestTendine("#tendaREPEATACC"));
document.querySelector('#mobileMenu [data-index="2222"]').addEventListener("click",() => gestTendine("#tendaREPEATAUX"));
document.querySelector('#mobileMenu [data-index="22222"]').addEventListener("click",() => gestTendine("#tendaWATCH"));
document.querySelector('#mobileMenu [data-index="222222"]').addEventListener("click",() => gestTendine("#tendaALIMENTAZIONE"));
document.querySelector('#mobileMenu [data-index="2222222"]').addEventListener("click",() => gestTendine("#tendaESPLORA"));




