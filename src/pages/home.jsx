import React from 'react';
import { Button, Form, Select, Space } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Navbar = () => (
  <nav className="h-[80px] w-full bg-gray-800">
    <div>
      <ul className="mt-[25px] flex justify-center gap-5">
        <li>
          <a href="##" className="text-white hover:text-gray-400">
            Parametrlar
          </a>
        </li>
        <li>
          <a href="/sound" className="text-white hover:text-gray-400">
            Ovoz
          </a>
        </li>
        <li>
          <a href="##" className="text-white hover:text-gray-400">
            Rasmlar
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const App = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      age: '56-60',
      condition: 'yes',
      smoking: 'yes',
      allergy: 'yes',
      coldExposure: 'yes',
      heredity: 'observed',
      diseaseStart: 'slow',
      treatmentSuccess: 'yes',
      cough: 'yes',
      sputum: 'observed',
      breathing: 'expressed',
      chestPain: 'yes',
      fever: '37-38',
      breathSounds: 'male'
    });
  };

  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <Navbar />
      <div className="flex">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
          <Form.Item className="w-[1200px]" name="age" label="1.1" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Беморлар ўртача ёши:" allowClear>
              <Option value="56-60">56-60</Option>
              <Option value="60-70">60-70</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="condition" label="1.2" rules={[{ required: true }]}>
            <Select
              className="h-[40px]"
              placeholder="Шароит (ишлаш ва яшаш шароитида зарарли омиллар мавжудлиги (зах ва б.)"
              allowClear
            >
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="smoking" label="1.3" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Чекиш (бемор чекади, олдин чаккан)" allowClear>
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="allergy" label="1.4" rules={[{ required: true }]}>
            <Select
              className="h-[40px]"
              placeholder="Аллергик восита билан контакт (Бемор аллергик воситалар билан доимий алоқада бўлади: кимёвий моддалар)"
              allowClear
            >
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="coldExposure" label="1.5" rules={[{ required: true }]}>
            <Select
              className="h-[40px]"
              placeholder="Совук (совуқ шароитда бемор регуляр бўлиши, иш ёки уйда)"
              allowClear
            >
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="heredity" label="1.6" rules={[{ required: true }]}>
            <Select
              className="h-[40px]"
              placeholder="Ирсият (наслда касаллик учраши, яқин қариндошларида ушбу касаллик кузатилганлиги)"
              allowClear
            >
              <Option value="observed">Кузатилган</Option>
              <Option value="not-observed">Кузатилмаган</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="diseaseStart" label="1.7" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Касаллик бошланиши" allowClear>
              <Option value="slow">Секин аста</Option>
              <Option value="fast">Тезда</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="treatmentSuccess" label="1.8" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Касаллик кечиши" allowClear>
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="treatmentSuccess" label="1.9" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Даволаш самара бердими?" allowClear>
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="treatmentSuccess" label="1.10" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Хуружлар билан кечиши" allowClear>
              <Option value="yes">Xa</Option>
              <Option value="no">Йўқ</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="cough" label="1.11" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Йўтал кузатилиши" allowClear>
              <Option value="yes">Кузатилади доимий эрталаб</Option>
              <Option value="day">Кузатилади кун давомида</Option>
              <Option value="none">Кузатилмайди</Option>
            </Select>
          </Form.Item>
          <Form.Item className="w-[1200px]" name="sputum" label="1.12" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Балғам ранги бор/йўқлиги" allowClear>
              <Option value="observed">Шиллиқ йирингли </Option>
              <Option value="none">Балғам кузатилмайди</Option>
              <Option value="both">Шиллиқ йирингли ёки кузатилмайди</Option>
            </Select>
          </Form.Item>
          <Form.Item className="w-[1200px]" name="breathing" label="1.13" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Хансираш" allowClear>
              <Option value="expressed">Ифодаланган </Option>
              <Option value="constant">Доимий</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="chestPain" label="1.14" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Оғриқлар (кўкрак кафасидаги оғриқлар мавжудлиги)" allowClear>
              <Option value="yes">Мавжуд</Option>
              <Option value="no">Мавжуд эмас</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-[1200px]" name="fever" label="1.15" rules={[{ required: true }]}>
            <Select className="h-[40px]" placeholder="Иситма" allowClear>
              <Option value="none">Йўқ</Option>
              <Option value="37-38">37-38</Option>
              <Option value="39-40">39-40</Option>
            </Select>
          </Form.Item>

          <Form.Item className="ml-[650px]" {...tailLayout}>
            <Space>
              <Button size="large">Submit</Button>
              <Button size="large" onClick={onReset} danger>
                Reset
              </Button>
              <Button size="large" htmlType="button" onClick={onFill}>
                Fill from
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;