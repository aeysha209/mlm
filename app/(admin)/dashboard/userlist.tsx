import React from 'react'

export default function UserlistDashboard() {
  return (
    <div className="col-md-7">
    <div className="w-full mt-4 bg-gray-50 rounded-xl">
      <div className="card">
        <div className="card-body">
          <h6>Refreal List </h6>
          <div className="d-flex justify-content-end mt-2 mb-4 gap-5">
            <button
              className="btn"
              style={{ backgroundColor: "#35836F", color: "#fff" }}
            >
              সব দেখুন
            </button>
          </div>

          <div className="row-md-6">
            <table className="table">
              <thead>
                <tr className="table_head">
                  <th scope="col">ক্র/নং</th>
                  <th scope="col">তারিখ</th>
                  <th scope="col">কেন্দ্র কোড</th>
                  <th scope="col">কেন্দ্রের নাম</th>

                  <th scope="col">বিভাগ</th>
                  <th scope="col">জেলা</th>
                  <th scope="col">পরিদর্শনকারী</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_head">
                  <th scope="col">01</th>
                  <td>০১/০৮/২০২২</td>
                  <td>১০১৩৫৪৫৫</td>
                  <td>এ বি সি সেন্টার</td>
                  <td>ঢাকা</td>
                  <td>কুমিল্লা</td>
                  <td>সোলাইমান</td>
                </tr>
                <tr className="table_head">
                  <th scope="col">02</th>

                  <td>০১/০৮/২০২২</td>
                  <td>১০১৩৫৪৫৫</td>
                  <td>এ বি সি সেন্টার</td>
                  <td>ঢাকা</td>
                  <td>কুমিল্লা</td>
                  <td>সোলাইমান</td>
                </tr>
                <tr className="table_head">
                  <th scope="col">03</th>

                  <td>০১/০৮/২০২২</td>
                  <td>১০১৩৫৪৫৫</td>
                  <td>এ বি সি সেন্টার</td>
                  <td>ঢাকা</td>
                  <td>কুমিল্লা</td>
                  <td>সোলাইমান</td>
                </tr>
                <tr className="table_head">
                  <th scope="col">04</th>

                  <td>০১/০৮/২০২২</td>
                  <td>১০১৩৫৪৫৫</td>
                  <td>এ বি সি সেন্টার</td>
                  <td>ঢাকা</td>
                  <td>কুমিল্লা</td>
                  <td>সোলাইমান</td>
                </tr>
                <tr className="table_head">
                  <th scope="col">05</th>

                  <td>০১/০৮/২০২২</td>
                  <td>১০১৩৫৪৫৫</td>
                  <td>এ বি সি সেন্টার</td>
                  <td>ঢাকা</td>
                  <td>কুমিল্লা</td>
                  <td>সোলাইমান</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}