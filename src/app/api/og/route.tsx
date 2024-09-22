import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Tazkiya Works';

    const fontData = await fetch(
      new URL(
        '../../../assets/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    const iconData = await fetch(
      new URL('../../../assets/favicon.svg', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div tw='relative flex flex-row w-full h-full items-center justify-center bg-white gap-56'>
          {/* Background Image */}
          {/* <div tw='fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] bg-repeat'></div> */}

          {/* SVG Icon */}
          <svg
            width='150'
            height='150'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='40' height='40' rx='11' fill='white' />
            <path
              d='M20.0432 37C19.507 37 19.0538 36.6117 18.9239 36.0915C18.5099 34.4335 17.7176 32.6703 16.5468 30.8021C15.1596 28.559 13.1823 26.4784 10.6146 24.5599C8.38135 22.872 6.14806 21.7209 3.91494 21.1069C3.3859 20.9615 3 20.4925 3 19.9441C3 19.4062 3.37111 18.9424 3.88825 18.7949C6.07785 18.1698 8.18704 17.1547 10.2162 15.75C12.5477 14.1267 14.4956 12.1788 16.0599 9.90625C17.4437 7.88172 18.3937 5.87963 18.9096 3.89964C19.0449 3.38097 19.5016 3 20.0376 3C20.5795 3 21.0394 3.3893 21.1713 3.91511C21.4691 5.10205 21.9346 6.31704 22.5677 7.55991C23.3646 9.09467 24.3828 10.5703 25.6224 11.9871C26.8915 13.3743 28.3082 14.6285 29.8724 15.75C31.9165 17.1989 33.9944 18.2169 36.1065 18.8039C36.6246 18.9479 37 19.4091 37 19.9468C37 20.4927 36.6133 20.9578 36.0869 21.1021C34.7482 21.4691 33.3702 22.0611 31.9532 22.8776C30.2413 23.8811 28.6476 25.0764 27.1718 26.4636C25.6962 27.8212 24.4861 29.2526 23.5416 30.7578C22.3686 32.6298 21.5754 34.4067 21.1623 36.0886C21.0341 36.6104 20.5802 37 20.0432 37Z'
              fill='#27272A'
            />
          </svg>
        </div>
      ),
      {
        fonts: [
          {
            name: 'Instrument Serif',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response('Failed to generate OG Image', { status: 500 });
  }
}
