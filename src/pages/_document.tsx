/**
 * Copyright (c) 2018-2021 August
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Document, { NextScript, Head, Html, Main, DocumentContext } from 'next/document';

export default class PawDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initial = await Document.getInitialProps(ctx);
    return { ...initial };
  }

  render() {
    return <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='https://cdn.floofy.dev/images/trans.png' />
        <link rel='icon' href='https://cdn.floofy.dev/images/trans.png' />
        <meta charSet='UTF-8' />
        <meta name='description' content='Student, Developer in the United States creating projects no one will use except for myself. (^・ω・^ )' />
        <meta property='og:description' content='Student, Developer in the United States creating projects no one will use except for myself. (^・ω・^ )' />
        <meta property='og:title' content='Noel 🌺' />
        <meta property='og:image' content='https://cdn.floofy.dev/images/trans.png' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://floofy.dev' />

        <script
          data-do-not-track='true'
          data-website-id='02893e86-fbd6-427c-9b77-7c7317cb45f7'
          type='text/javascript'
          async
          defer
          src='https://analytics.floofy.dev/umami.js'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
