export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <h3 className="text-slate-200 text-center items-center justify-center w-full text-4xl">
        Skills
      </h3>
      <span className="text-slate-200 text-center items-center justify-center w-full ">
        My technical level
      </span>
      <div className="grid grid-cols-2 text-center items-center justify-center w-full">
        <div className="flex text-center items-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path d="M2 15a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m19 2h-2V9h-2V7h6v2h-2v8M16 7v2h-2v2h2v2h-2v2h2v2h-4V7h4m-5 0v10H9l-3-6v6H4V7h2l3 6V7h2z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path
              fill="currentColor"
              d="M18.82 15.507l-4.709 1.536-4.094 1.808-1.147.303a31.428 31.428 0 01-1.887 1.648 7.302 7.302 0 00-.934.926c-.325.405-.58.837-.689 1.168-.197.597-.101 1.202.279 1.761.485.713 1.449 1.438 2.572 1.931.572.252 1.538.576 2.263.759 1.207.305 3.54.636 4.824.685.261.01.607.009.623-.002.028-.019.228-.397.46-.871.79-1.613 1.361-3.125 1.668-4.416.186-.782.331-1.825.425-3.061.026-.346.036-1.501.016-1.894a13.326 13.326 0 00-.179-1.67.43.43 0 01-.011-.147c.013-.011.058-.025.636-.194l-.115-.27zm-1.076.631c.043 0 .157 1.091.186 1.784.006.147.005.241-.004.241-.028 0-.603-.338-1.011-.594a28.29 28.29 0 01-1.139-.757c-.034-.027-.03-.028.261-.128.495-.171 1.669-.547 1.706-.547zm-2.399.788c.03 0 .113.046.309.168.735.46 1.729 1.014 2.155 1.2.132.058.147.035-.157.242-.649.441-1.455.874-2.446 1.314-.173.077-.319.139-.325.139s.013-.088.042-.195c.24-.887.375-1.783.379-2.502.002-.355.002-.357.036-.366l.006-.001zm-.493.188c.021.021.006.817-.02 1.034a8.973 8.973 0 01-.408 1.799c-.014.016-.501-.458-.663-.646a4.828 4.828 0 01-.655-.953c-.081-.159-.21-.475-.198-.483.055-.04 1.93-.765 1.944-.751zm-2.326.917c.004 0 .008.002.01.004a.87.87 0 01.055.129c.113.308.368.766.59 1.058.242.32.557.66.821.886l.175.15c.023.02.03.017-.55.237a47.99 47.99 0 01-2.247.783l-.602.195c-.032.012-.022-.008.071-.154.418-.653 1.051-1.929 1.405-2.832.061-.157.12-.313.13-.349.015-.052.031-.069.079-.091a.136.136 0 01.063-.016zm-.713.294c.009.008-.171.389-.349.736a28.26 28.26 0 01-1.228 2.14c-.087.139-.167.267-.178.282-.018.026-.025.017-.08-.092a3.22 3.22 0 01-.274-.824 3.325 3.325 0 01.019-1.061c.046-.222.044-.217.149-.271.453-.232 1.926-.922 1.941-.909zm6.139.249v.151a19.566 19.566 0 01-.209 2.674c-.022.139-.04.254-.042.255s-.102-.028-.223-.066a9.194 9.194 0 01-1.636-.7c-.346-.19-.847-.497-.833-.511.004-.004.151-.082.328-.174a20.896 20.896 0 001.947-1.142c.218-.145.544-.381.616-.445l.051-.045zm-8.827 1.053c.014-.001.011.027-.012.158a3.815 3.815 0 00-.04.382c-.029.52.056.904.314 1.43.072.146.128.268.125.27-.026.022-2.38.71-3.12.913l-.427.118c-.026.008-.028.002-.019-.058.081-.522.479-1.207 1.036-1.783.37-.383.666-.609 1.17-.897.362-.206.923-.516.964-.532l.008-.001zm5.552.994c.002-.003.089.044.194.104.76.44 1.821.852 2.726 1.059l.082.019-.112.063c-.473.262-2.029.91-3.618 1.506l-.503.19c-.045.018-.08.03-.08.026s.066-.13.146-.28c.446-.834.892-1.848 1.12-2.552.023-.072.044-.132.046-.135zm-.566.185a1.39 1.39 0 01-.062.165c-.31.75-.716 1.568-1.235 2.487-.132.234-.243.425-.247.424s-.111-.064-.238-.142c-.755-.462-1.423-1.031-1.861-1.584l-.063-.078.325-.089a23.093 23.093 0 003.124-1.08c.139-.06.254-.107.256-.104zm3.516 1.228c.002 0 .002.002.002.003 0 .079-.18.811-.329 1.341-.125.445-.231.792-.426 1.408-.086.272-.16.494-.165.493l-.046-.009a14.642 14.642 0 01-2.892-.815 8.216 8.216 0 01-.626-.277 4.68 4.68 0 01.476-.224c1.62-.707 3.299-1.512 3.873-1.857a.413.413 0 01.132-.063zm-8.116.278c.009.008-.445.657-1.078 1.543-.22.308-.479.671-.574.807s-.24.35-.322.477l-.15.231-.159-.134a6.394 6.394 0 01-.663-.675c-.306-.381-.513-.782-.594-1.15-.038-.17-.039-.256-.003-.267.052-.016 1.002-.239 1.894-.446.495-.115 1.068-.249 1.273-.299s.375-.088.377-.086zm.456.174l.115.128a6.641 6.641 0 001.67 1.365c.112.065.198.121.191.126a293.463 293.463 0 01-4.24 1.498.713.713 0 01-.071-.047l-.066-.047.103-.148c.334-.483.753-1.014 1.67-2.118l.629-.757zm2.84 2.03c.003-.003.161.053.354.125.464.173.827.286 1.32.41.605.151 1.478.303 1.996.346.079.007.12.016.107.024-.024.015-.548.19-.933.311-.611.192-2.48.744-4.004 1.183l-.537.153c-.034.007-.153-.024-.153-.04 0-.008.085-.116.189-.24a21.733 21.733 0 001.446-1.944l.216-.328zm-.629.018c.005.005-.248.409-.692 1.108-.188.295-.4.631-.473.747s-.18.291-.237.391l-.104.182-.053-.014a29.485 29.485 0 01-1.265-.447 8.061 8.061 0 01-.828-.381c-.283-.153-.642-.38-.614-.389l1.081-.296c1.56-.425 2.423-.669 2.989-.846.106-.033.194-.058.196-.056zm4.431 1.039h.005c.015.037-.563 1.636-.774 2.143-.047.114-.065.141-.089.14-.06-.003-.897-.12-1.404-.197-.887-.135-2.373-.394-2.748-.48l-.087-.019.532-.12c1.14-.257 1.687-.395 2.242-.564.7-.214 1.394-.482 2.094-.807.111-.052.205-.091.229-.096zm-2.642-21.04c-.079-.009-1.343.446-2.155.776-1.1.447-1.954.875-2.481 1.245-.196.138-.443.385-.479.48a.332.332 0 00-.02.12l.478.451 1.134.362 2.702.483 3.088.531.031-.265a.236.236 0 00-.028-.004l-.407-.064-.083-.145a27.067 27.067 0 01-1.153-2.277 11.936 11.936 0 01-.52-1.434c-.066-.238-.073-.253-.11-.258zm-.059.183h.005c.002.003.017.102.031.221.061.497.172.98.346 1.499.131.391.133.368-.023.325-.363-.101-1.99-.381-3.167-.544a9.002 9.002 0 01-.35-.052c-.015-.015.849-.468 1.232-.646.491-.229 1.829-.785 1.926-.803zm-3.43 1.593l.138.047c.756.257 2.65.619 3.697.706.118.01.217.02.22.023s-.097.056-.223.119c-.505.253-1.061.561-1.446.802-.113.071-.216.128-.23.127s-.088-.013-.166-.026l-.142-.023-.357-.347a190.11 190.11 0 00-1.307-1.255l-.184-.173zm-.14.112l.5.625c.275.344.552.685.613.758s.109.136.106.138c-.014.01-.725-.128-1.102-.215a8.243 8.243 0 01-.786-.208l-.195-.063.001-.048c.002-.24.305-.594.818-.956l.046-.031zm4.262.851c.015.001.031.032.075.129.121.266.499.987.591 1.126.03.046.078.049-.424-.032-1.205-.195-1.595-.26-1.595-.267 0-.005.036-.028.08-.053.373-.208.75-.469 1.085-.751l.171-.144c.006-.005.011-.008.016-.007zm-5.726-.286s-.078.124-.004.308c.046.114.183.251.334.396 0 0 1.582 1.543 1.775 1.767.876 1.011 1.257 2.007 1.292 3.382.023.882-.148 1.658-.561 2.559-.741 1.615-2.301 3.397-4.711 5.378l.354-.117c.227-.17.536-.352 1.265-.751 1.677-.918 3.561-1.762 5.875-2.631 3.329-1.251 8.806-2.719 11.922-3.196l.325-.05-.05-.078a10.567 10.567 0 00-.713-1.005c-.683-.845-1.511-1.535-2.525-2.102-1.393-.78-3.2-1.386-5.484-1.84a66.623 66.623 0 00-2.147-.368c-1.63-.254-2.681-.426-3.843-.628-.416-.072-1.038-.177-1.451-.266a8.897 8.897 0 01-.941-.253c-.262-.103-.632-.203-.71-.504zm.917.89a1.03 1.03 0 01.134.041c.133.045.31.098.515.156.144.04.302.082.469.125.214.055.391.102.393.104.024.027.383 1.174.506 1.614.047.168.082.308.079.311s-.043-.059-.088-.137c-.416-.731-1.074-1.475-1.836-2.073a3.043 3.043 0 01-.172-.141zm1.752.484c.018-.001.097.012.191.033.606.134 1.689.343 2.385.46.116.02.211.041.211.047s-.043.034-.096.06c-.117.059-.59.342-.748.448-.395.264-.75.547-1.008.804-.104.103-.191.188-.194.188s-.021-.06-.04-.134a11.895 11.895 0 00-.636-1.742 1.71 1.71 0 01-.07-.162l.004-.002zm3.083.586c.02.007.059.127.127.395a5.94 5.94 0 01.171 1.629 3.3 3.3 0 01-.021.308l-.011.037-.184-.06a46.777 46.777 0 00-1.53-.451 6.934 6.934 0 01-.549-.165c0-.022.44-.462.629-.629.361-.32 1.334-1.076 1.368-1.064zm.245.035c.011-.01 1.473.243 2.137.37.495.095 1.212.245 1.255.263.021.009-.053.049-.291.156-.941.424-1.638.803-2.331 1.267-.183.122-.334.222-.337.222s-.006-.102-.006-.226a4.998 4.998 0 00-.383-1.934.599.599 0 01-.044-.118zm3.78.748c.011.011-.037.3-.078.47-.129.53-.472 1.317-.895 2.056-.075.13-.141.239-.149.241s-.104-.048-.214-.112a11.354 11.354 0 00-1.396-.683 4.282 4.282 0 01-.272-.118c-.023-.022 1.12-.779 1.726-1.142.485-.291 1.265-.726 1.279-.712zm.27.042c.033 0 .681.177 1.017.277.835.25 1.799.602 2.423.886l.26.118-.183.042c-1.529.351-2.84.757-4.102 1.269-.105.043-.196.078-.203.078s.027-.081.074-.18c.379-.806.625-1.652.688-2.37.006-.065.018-.118.026-.118zm-6.445 1.482c.01-.01.504.105.773.181.405.114 1.266.402 1.266.424 0 .004-.095.087-.211.184-.465.389-.914.797-1.452 1.316-.159.154-.295.279-.302.279s-.01-.023-.006-.05c.081-.598.064-1.366-.049-2.147a1.21 1.21 0 01-.019-.187zm10.392.009c.007.007-.229.377-.376.588-.215.307-.526.711-1.235 1.603l-.934 1.177c-.142.179-.26.326-.264.326s-.049-.064-.101-.142a7.436 7.436 0 00-1.44-1.592c-.106-.088-.225-.184-.264-.214s-.072-.057-.072-.061c0-.01.604-.269 1.065-.457.803-.327 1.9-.718 2.721-.97.433-.133.893-.265.9-.258zm.273.072a.908.908 0 01.203.098 12.033 12.033 0 013.025 2.458c-.002.001-.162.014-.356.028-1.499.113-3.415.431-5.259.875-.125.03-.234.055-.241.055s.13-.138.305-.305c1.083-1.041 1.578-1.699 2.159-2.874.087-.175.16-.326.163-.335l.002-.001zm-7.921.812c.049.011.511.226.86.401.319.16.802.417.826.439.003.003-.167.092-.378.197-.669.335-1.242.65-1.84 1.016-.171.104-.313.19-.318.19-.015 0-.009-.013.086-.188.319-.583.575-1.28.723-1.96.013-.061.029-.098.04-.095zm-.466.083c.01.01-.11.45-.186.685a8.917 8.917 0 01-.818 1.771l-.088.144-.2-.193a2.642 2.642 0 00-.662-.489.95.95 0 01-.172-.101c-.001-.029.607-.582 1.075-.978.335-.284 1.042-.849 1.05-.84zm2.829 1.163l.174.113a13.8 13.8 0 011.229.906c.201.168.593.518.673.603l.043.045-.288.08c-1.63.452-2.89.855-4.359 1.395-.163.06-.304.11-.314.11-.02 0-.04.019.326-.319.94-.865 1.77-1.818 2.391-2.745l.125-.188zm-.743.187c.008.008-.482.695-.773 1.083a47.132 47.132 0 01-1.396 1.744c-.178.211-.331.386-.34.389s-.015-.049-.015-.13a2.993 2.993 0 00-.302-1.281c-.081-.165-.095-.204-.078-.22.067-.061 1.104-.652 1.758-1.002.449-.241 1.138-.591 1.147-.582zm-4.496 1.101a3.933 3.933 0 01.796.507c.007.006-.086.082-.207.169-.337.243-.851.631-1.148.868-.314.25-.324.257-.289.203a6.43 6.43 0 00.477-.823 6.55 6.55 0 00.297-.744.68.68 0 01.075-.18zm1.198.94c.016-.002.039.028.136.172.203.303.358.707.398 1.037l.008.071-.486.188c-.873.339-1.677.673-2.219.921-.152.07-.42.198-.595.285s-.318.156-.318.153c0-.004.11-.086.244-.184 1.065-.773 1.984-1.62 2.676-2.467a2.23 2.23 0 01.15-.174c.002-.002.004-.002.007-.002zm-.553.137c.014.014-.393.475-.667.754a11.807 11.807 0 01-2.21 1.784l-.214.135c-.023.014.007-.021.378-.424.233-.254.412-.465.614-.728.133-.173.159-.198.355-.339.527-.38 1.731-1.196 1.745-1.182z"
            />
          </svg>
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path
              fill="currentColor"
              d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756V7.96c0-1.47-1.24-2.574-2.712-2.819-.932-.155-1.898-.226-2.825-.221s-1.813.083-2.592.221c-2.295.405-2.712 1.254-2.712 2.819v2.067h5.423v.689H8.527c-1.576 0-2.956.947-3.388 2.75-.498 2.066-.52 3.355 0 5.512.385 1.606 1.306 2.75 2.882 2.75h1.865V19.25c0-1.79 1.549-3.369 3.388-3.369zm-.342-7.231a1.024 1.024 0 01-1.018-1.03c0-.572.455-1.037 1.018-1.037.56 0 1.018.465 1.018 1.037 0 .57-.457 1.03-1.018 1.03zm13.893 4.816c-.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717.505 3.363.596 5.417 0 1.365-.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-.689h8.129c1.576 0 2.163-1.099 2.712-2.75.566-1.699.542-3.332 0-5.512zm-7.793 10.329c.562 0 1.018.461 1.018 1.03 0 .572-.456 1.037-1.018 1.037a1.03 1.03 0 01-1.018-1.037c0-.57.457-1.03 1.018-1.03z"
            />
          </svg>
        </div>
        <div className="flex text-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path d="M10.483 12.482h3.034L12 8.831z" />
            <path d="M12 3.074L3.689 6.038l1.268 10.987 7.043 3.9 7.043-3.9 1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z" />
          </svg>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-amber-300"
          >
            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
          </svg>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-indigo-500"
          >
            <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-indigo-500"
          >
            <path
              fill="currentColor"
              d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
            />
          </svg>
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            height="10rem"
            width="10rem"
            className="text-indigo-500"
          >
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
