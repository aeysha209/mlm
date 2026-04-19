"use client";
import React from "react";
import PieChartWithCustomizedLabel from "../../components/Pichart";
import StackedBarChart from "../../components/BarChart";
import UserlistDashboard from "./userlist";

export default function Dashboard() {
  return (
    <div style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
      {/* ===============main content/section============ */}
        <section>
          <div className="row">
            <div className="col-md-8">
              <div className="w-full m-2 bg-white p-5 rounded-md shadow-md">
                <div>
                  <p className="text-lg font-medium text-[#333333]">এক পলকে</p>
                </div>

                <div className="d-flex w-full justify-content-between mt-4 gap-4">
                  <div className="w-full">
                    <p className="text-sm">শিক্ষা কেন্দ্রের তথ্য</p>
                    <div className="d-flex justify-content-between g-2 w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs d-grid gap-2">
                          <span className="text-#000000">মোট কেন্দ্র </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সক্রিয় কেন্দ্র:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">খালি কেন্দ্র: </span>
                          <span className="text-[#066E38]">২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">রিসোর্স সেন্টার তথ্য</p>
                    <div className="d-flex justify-content-between g-2 w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs d-grid gap-2">
                          <span className="text-#000000">মোট কেন্দ্র </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সক্রিয় কেন্দ্র:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">খালি কেন্দ্র: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-full justify-content-between mt-4 gap-4">
                  <div className="w-full">
                    <p className="text-sm">শিক্ষা কেন্দ্রের তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষার্থী: </span>
                          <span className="text-[#066E38]">৬৮,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬০,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৮,০০০</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬০০</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">চলতি বছরে ভর্তির তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষার্থী: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm">শিক্ষকদের তথ্য</p>
                    <div className="w-full p-2 bg-[#E1F5F0] rounded-lg">
                      <div>
                        <p className="text-xs">
                          <span className="text-#000000">মোট শিক্ষক: </span>
                          <span className="text-[#066E38]">৬৮,২০৫</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">প্রাক-প্রাথমিক: </span>
                          <span className="text-[#066E38]">৬০,০০০</span>
                        </p>

                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা:{" "}
                          </span>
                          <span className="text-[#066E38]">৮,০০০</span>
                        </p>
                        <p className="text-xs">
                          <span className="text-#000000">
                            সহজ কোরআন শিক্ষা (বয়স্ক):{" "}
                          </span>
                          <span className="text-[#066E38]">৬০০</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-full m-2 bg-gray-50 rounded-xl">
                <div>
                  <div className="card">
                    <div className="card-body">
                      <h6>শিক্ষা কেন্দ্রের ধরন</h6>
                      <div className="">
                        <PieChartWithCustomizedLabel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <div className="row">
        <div className="col-md-5">
          <div className="w-full mt-4 p-2 bg-gray-50 rounded-xl">
            <div className="card">
              <div className="card-body">
                <h6>বার্ষিক শিক্ষার্থী ভর্তি তথ্য</h6>

                <StackedBarChart />
              </div>
            </div>
          </div>
        </div>
        <UserlistDashboard />
      </div>
    </div>
  );
}
