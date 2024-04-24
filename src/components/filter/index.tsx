import { FilterForm, InputItem, Wrapper } from "@components/filter/style";
import { Button, Form, Input, FormProps, Radio, RadioChangeEvent } from "antd";
import { MembersInputType } from "@components/filter/type";
import { useState } from "react";

export default function Filter() {
  const [value, setValue] = useState<string>("all");
  const onFinish: FormProps<MembersInputType>["onFinish"] = (
    values: MembersInputType
  ) => {
    console.log("Success:", values);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <FilterForm>
        <Form name="filter-form" className="filter-form" onFinish={onFinish}>
          <div className="filter-form-left">
            <InputItem>
              <span>검색어</span>
              <Form.Item<MembersInputType>
                name="search"
                className="ant-input ant-input-border"
              >
                <Input placeholder="검색어를 입력해주세요." />
              </Form.Item>
            </InputItem>

            <InputItem>
              <span>작업연도</span>
              <Form.Item<MembersInputType>
                name="year"
                className="ant-input ant-input-border"
              >
                <Input placeholder="검색어를 입력해주세요." />
              </Form.Item>
            </InputItem>

            <InputItem>
              <span>노출</span>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value="all">전체</Radio>
                <Radio value="1">노출</Radio>
                <Radio value="2">비노출</Radio>
              </Radio.Group>
            </InputItem>
          </div>

          <Form.Item>
            <Button htmlType="submit" className="ant-button">
              search
            </Button>
          </Form.Item>
        </Form>
      </FilterForm>
    </Wrapper>
  );
}
