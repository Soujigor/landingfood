import Image from "next/image";
import React from "react";
import Logo from "../../public/igu1.jpg";

const Main = () => {
  return (
    <div class="columns">
      <div class="card-content column is-half">
        <div class="card-image">
          <figure class="image is-256x256">
            <Image src={Logo} alt="logo" />
          </figure>
        </div>
        <div class="content column is-half">
          <h2>
            Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque
            condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
            pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis
            sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
            neque nisl.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
